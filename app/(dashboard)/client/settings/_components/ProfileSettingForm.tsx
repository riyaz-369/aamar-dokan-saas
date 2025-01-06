/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { ProfileSettingFormSchema } from "./ProfileSettingFormSchema";
import type { z } from "zod";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageTitle from "@/components/PageTitle";
import {
  BadgeInfoIcon,
  CalendarIcon,
  Lock,
  Save,
  UserCircle2Icon,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/app/(pages)/auth/sign-up/_components/Calander";

const ProfileSettingForm = ({ entry }: { entry: any }) => {
  // const [loader, setLoader] = useState(false);
  // const loaderClose = () => setLoader(false);

  const form = useForm<z.infer<typeof ProfileSettingFormSchema>>({
    resolver: zodResolver(ProfileSettingFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      gender: "Male",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      photo: "",
      username: "",
      password: "",
      dob: undefined,
      isPhoneVerified: false,
    },
  });

  useEffect(() => {
    if (entry?.id) {
      form.setValue("name", entry.name);
      form.setValue("phone", entry.phone);
      form.setValue("email", entry.email);
      form.setValue("gender", entry.gender);
      form.setValue("street", entry.street);
      form.setValue("city", entry.city);
      form.setValue("state", entry.state);
      form.setValue("zip", entry.zip);
      form.setValue("country", entry.country);
      form.setValue("photo", entry.photo);
      form.setValue("username", entry.username);
      form.setValue("password", entry.password);
      form.setValue("dob", entry.dob ? new Date(entry.dob) : undefined);
      form.setValue("isPhoneVerified", entry.isPhoneVerified);
      form.setValue("status", entry.status);
    }
  }, []);

  async function onSubmit(data: z.infer<typeof ProfileSettingFormSchema>) {
    console.log(data);
  }

  return (
    <div className="xl:px-56 2xl:px-64 py-8 lg:py-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-10">
            {/* Basic information */}
            <div className="space-y-4">
              <span className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <UserCircle2Icon />
                <PageTitle title="Basic Information" />
              </span>
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
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
                      <Input placeholder="Enter your phone number" {...field} />
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
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4 items-center">
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
                            captionLayout="dropdown"
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

                {/* gender */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Address info */}
            <div className="space-y-4">
              <span className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <BadgeInfoIcon />
                <PageTitle title="Address" />
              </span>

              {/* Street */}
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your street address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* City */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* State */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your state" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ZIP */}
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your ZIP code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <span className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <Lock />
                <PageTitle title="Security" />
              </span>

              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="">
              <Button type="submit" className="mr-2">
                <Save />
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileSettingForm;
