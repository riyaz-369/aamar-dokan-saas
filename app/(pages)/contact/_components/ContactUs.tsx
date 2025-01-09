"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { z } from "zod";
import { useState } from "react";

import Loader from "@/components/Loader";
import { ContactFormSchema } from "./ContactFormSchema";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { SaveContactInfoIntoDB } from "../_action";
import { toast } from "sonner";

// import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [loader, setLoader] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  // const handleCaptchaChange = (token: string | null) => {
  //   console.log("token", token);
  //   setCaptchaToken(token);
  // };

  async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    // if (!captchaToken) {
    //   toast.error("Please complete the CAPTCHA.");
    //   return;
    // }

    try {
      loaderShow();
      const payload = { ...data }; //captchaToken
      const contactUsRes = await SaveContactInfoIntoDB(payload);
      if (contactUsRes) {
        form.reset();
        // setCaptchaToken(null);
        loaderClose();
        toast.success("Message sent successfully!");
      }
    } catch (error) {
      loaderClose();
      console.error("Error saving contact info:", error);
      toast.error("Failed to send message.");
    }
  }

  return (
    <div className="space-y-6 rounded-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message" {...field} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* reCAPTCHA */}
          {/* <div className="flex justify-center">
            <ReCAPTCHA
              // sitekey={process.env.GOOGLE_SITE_KEY as string}
              sitekey="6LfFX7IqAAAAABj2BqZPQi0R6RjXyNYlZjGhcC7R"
              ref={captchaRef}
              onChange={handleCaptchaChange}
            />
          </div> */}

          <div className="flex justify-end">
            <Button type="submit">
              <Send className="h-5 w-5 mr-2" />
              Send
            </Button>
          </div>
        </form>
      </Form>
      <Loader isOpen={loader} onClose={setLoader} title="Message Sending" />
    </div>
  );
};

export default ContactUs;
