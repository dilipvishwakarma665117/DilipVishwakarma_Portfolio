'use server';

/**
 * @fileOverview Smart Contact Form flow that validates inputs, detects spam, and classifies potential threats before sending submissions to Gmail.
 *
 * - smartContactForm - A function that handles the smart contact form process.
 * - SmartContactFormInput - The input type for the smartContactForm function.
 * - SmartContactFormOutput - The return type for the smartContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { Resend } from 'resend';

const SmartContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  message: z.string().min(10).describe('The message from the person submitting the form.'),
});

export type SmartContactFormInput = z.infer<typeof SmartContactFormInputSchema>;

const ThreatAssessmentSchema = z.object({
  threatLevel: z.enum(['low', 'medium', 'high']).describe('The threat level of the message.'),
  reason: z.string().describe('The reason for the threat level assessment.'),
});

const SmartContactFormOutputSchema = z.object({
  spamDetected: z.boolean().describe('Whether or not the message was detected as spam.'),
  threatAssessment: ThreatAssessmentSchema.describe('The threat assessment of the message.'),
});

export type SmartContactFormOutput = z.infer<typeof SmartContactFormOutputSchema>;


const assessThreat = ai.defineTool(
  {
    name: 'assessThreat',
    description: 'Assess the potential threat level of a message.',
    inputSchema: z.object({
      message: z.string().describe('The message to assess.'),
    }),
    outputSchema: ThreatAssessmentSchema,
  },
  async (input) => {
    const {output} = await threatAssessmentPrompt(input);
    return output!;
  }
);

const threatAssessmentPrompt = ai.definePrompt({
  name: 'threatAssessmentPrompt',
  input: {schema: z.object({message: z.string()})},
  output: {schema: ThreatAssessmentSchema},
  prompt: `You are an AI assistant specialized in assessing the threat level of messages.

  Analyze the following message and determine the threat level (low, medium, or high) and the reason for your assessment.

  Message: {{{message}}}
  \n
  Respond in JSON format.
  `,
});

export async function smartContactForm(input: SmartContactFormInput): Promise<SmartContactFormOutput> {
  return smartContactFormFlow(input);
}

const smartContactFormFlow = ai.defineFlow(
  {
    name: 'smartContactFormFlow',
    inputSchema: SmartContactFormInputSchema,
    outputSchema: SmartContactFormOutputSchema,
  },
  async input => {
    // Basic spam detection (example: check for common spam phrases)
    const isSpam = input.message.toLowerCase().includes('free offer') || input.message.toLowerCase().includes('urgent action');

    let threatAssessment = {threatLevel: 'low', reason: 'No spam detected.'};

    if (!isSpam) {
      threatAssessment = await assessThreat({message: input.message});
    }

    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        try {
            await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL,
                to: 'dileepv9721@gmail.com',
                subject: `New Message from ${input.name} via Portfolio`,
                reply_to: input.email,
                html: `
                    <p>You have received a new message from your portfolio contact form:</p>
                    <ul>
                        <li><strong>Name:</strong> ${input.name}</li>
                        <li><strong>Email:</strong> ${input.email}</li>
                    </ul>
                    <p><strong>Message:</strong></p>
                    <p>${input.message}</p>
                    <hr>
                    <p><strong>AI Assessment:</strong></p>
                    <ul>
                        <li><strong>Spam Detected:</strong> ${isSpam}</li>
                        <li><strong>Threat Level:</strong> ${threatAssessment.threatLevel}</li>
                        <li><strong>Reason:</strong> ${threatAssessment.reason}</li>
                    </ul>
                `,
            });
        } catch (error) {
            console.error("Failed to send email:", error);
            // Re-throw the error to make the client aware of the failure
            throw new Error("Sorry, there was an issue sending your message. Please try again later.");
        }
    } else {
        console.warn("RESEND_API_KEY or RESEND_FROM_EMAIL is not set. Skipping email submission.");
    }


    return {
      spamDetected: isSpam,
      threatAssessment: threatAssessment,
    };
  }
);
