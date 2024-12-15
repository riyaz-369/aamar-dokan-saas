"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Toaster } from "@/components/ui/sonner";
import PageTitle from "@/components/PageTitle";
import { InfoFormSchema } from "./SignUpFormSchema";
import type { z } from "zod";
// import { Textarea } from "@/components/ui/textarea";
import { updateClient } from "../../_action";
import { toast } from "sonner";

interface InfoFormProps {
  id: string;
}

const InfoForm: React.FC<InfoFormProps> = ({ id }) => {
  // Initialize the form with default values and validation
  const form = useForm<z.infer<typeof InfoFormSchema>>({
    resolver: zodResolver(InfoFormSchema),
    defaultValues: {
      email: "",
      dob: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof InfoFormSchema>) {
    await updateClient({
      id: id,
      data: data,
    });

    //TODO:: Login to account
    toast.success("Personal information update successful");
    // console.log(data);
    // setStep(4);
  }

  return (
    <div className="flex flex-col justify-end items-center  w-80">
      <div className="w-full px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <PageTitle title="Personal Info" className="pb-2 text-center" />
            {/* Full Name */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage className="text-black" />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="dob" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* street */}
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Street Address" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-2">
              {/* street */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Street Address</FormLabel> */}
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="City" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* street */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Street Address</FormLabel> */}
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="State" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              {/* street */}
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Street Address</FormLabel> */}
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Zip" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* street */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Street Address</FormLabel> */}
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Country" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <br />
            <Button className="w-full" type="submit">
              Save
            </Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
};

export default InfoForm;
