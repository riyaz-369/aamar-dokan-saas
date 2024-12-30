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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { RootState } from "@/app/_redux-store/store";
import { useSelector } from "react-redux";

interface InfoFormProps {
  id: string;
  aamardokanId: string;
}

const InfoForm: React.FC<InfoFormProps> = ({ id, aamardokanId }) => {
  const [loading, setLoading] = useState(false);
  const packs = useSelector((state: RootState) => state.orderSlice);

  const router = useRouter();

  // Initialize the form with default values and validation
  const form = useForm<z.infer<typeof InfoFormSchema>>({
    resolver: zodResolver(InfoFormSchema),
    defaultValues: {
      email: "",
      dob: new Date().toDateString(),
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: z.infer<typeof InfoFormSchema>) {
    setLoading(true);
    await updateClient({
      id: id,
      data: data,
    });

    //TODO:: Login to account
    toast.success("Personal information update successful");
    setLoading(false);

    const loginResult = await signIn("clientAuth", {
      redirect: false,
      aamardokanId: aamardokanId,
    });

    if (loginResult?.ok) {
      setLoading(false);
      if (packs.packageId && packs.serviceId) {
        router.push(`/client/cart`);
      } else {
        router.push("/client");
      }
    } else {
      setLoading(false);
      console.error("Login failed");
    }
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
                    <Input placeholder="Enter email address" {...field} />
                  </FormControl>
                  <FormMessage className="text-black" />
                </FormItem>
              )}
            />

            {/* date of birth */}

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                  <FormLabel>Date Of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
            <Button disabled={loading} className="w-full" type="submit">
              {loading ? <FaSpinner className="animate-spin" /> : ""}
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
