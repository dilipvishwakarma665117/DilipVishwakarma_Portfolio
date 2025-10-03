"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

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
import { contactData, socialLinks } from "@/lib/data";
import { Loader2, LocateIcon, CheckCircle } from "lucide-react";
import Link from "next/link";
import { smartContactForm } from "@/ai/flows/smart-contact-form";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
    try {
      const result = await smartContactForm(values);
      console.log("AI Assessment:", result);
      
      setFormState('success');
      form.reset();

    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message || "There was a problem with your request. Please try again.",
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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="glass-morphism">
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

          <div className="space-y-8">
            <Card className="glass-morphism">
                <CardHeader>
                    <CardTitle>Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <LocateIcon className="h-6 w-6 text-primary"/>
                        <p className="text-muted-foreground">{contactData.location}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({name, href, icon: Icon}) => (
                           <Link href={href} key={name} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" aria-label={name}>
                                <Icon className="h-5 w-5" />
                            </Button>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
