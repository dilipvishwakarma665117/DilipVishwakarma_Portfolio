
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name cannot be longer than 50 characters." }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address." }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(5000, { message: "Message cannot be longer than 5000 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setFormState('submitting');
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "Email service is not configured correctly. Please contact the site administrator.",
      });
      setFormState('idle');
      return;
    }

    const fullMessage = `
      Name: ${values.name}
      Email: ${values.email}
      
      Message:
      ${values.message}
    `;

    const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'Dilip Vishwakarma',
        message: fullMessage,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setFormState('success');
      form.reset();
    } catch (error) {
      console.error("EmailJS submission error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again later.",
      });
      setFormState('idle');
    }
  }
  
  return (
    <motion.section 
      id="contact" 
      className="bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Card className="glass-morphism w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="text-xl font-semibold">Thank You!</h3>
                  <p className="text-muted-foreground">Your message has been sent successfully. I'll get back to you soon.</p>
                   <Button onClick={() => setFormState('idle')}>Send Another Message</Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell me how I can help." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={formState === 'submitting'}>
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}

    
