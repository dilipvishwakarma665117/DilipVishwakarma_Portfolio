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
import { Loader2, CheckCircle, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "@/lib/data";

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

    const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'Dilip Vishwakarma',
        message: values.message,
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
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-lg text-muted-foreground px-4">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="flex items-start gap-4 sm:gap-6 group">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1">Email Me</h4>
                <p className="text-sm sm:text-base text-muted-foreground break-all">dileepv9721@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 sm:gap-6 group">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1">Location</h4>
                <p className="text-sm sm:text-base text-muted-foreground">{contactData.location}</p>
              </div>
            </div>

            <Card className="glass-card border border-white/5 p-5 sm:p-6 rounded-2xl sm:rounded-3xl hidden sm:block">
              <p className="italic text-sm sm:text-base text-muted-foreground mb-4">
                "Dilip is a dedicated professional who always ensures the highest quality. His automation skills are a great asset."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <div>
                  <p className="text-sm sm:text-base font-bold">Colleague</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Accenture India</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <CardHeader className="bg-primary/5 pb-4 px-6 sm:px-8 pt-6 sm:pt-8">
                <CardTitle className="text-xl sm:text-2xl font-black">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                {formState === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center gap-4 py-8 sm:py-12">
                    <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500 animate-bounce" />
                    <h3 className="text-xl sm:text-2xl font-bold">Message Sent!</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                    <Button onClick={() => setFormState('idle')} variant="outline" className="rounded-xl mt-4">
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="h-10 sm:h-12 rounded-xl border-white/10 bg-white/5 focus:bg-white/10 transition-all text-sm" />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="h-10 sm:h-12 rounded-xl border-white/10 bg-white/5 focus:bg-white/10 transition-all text-sm" />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold">Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="How can I help you today?" rows={4} {...field} className="rounded-xl border-white/10 bg-white/5 focus:bg-white/10 resize-none transition-all text-sm min-h-[100px] sm:min-h-[120px]" />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full btn-gradient h-10 sm:h-12 rounded-xl border-none font-bold text-sm sm:text-base shadow-xl" disabled={formState === 'submitting'}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
