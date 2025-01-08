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
import {
  AddressFormSchema,
  PersonalInfoFormSchema,
  SecurityFormSchema,
} from "./ProfileSettingFormSchema";
import type { z } from "zod";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageTitle from "@/components/PageTitle";
import {
  CalendarIcon,
  ClipboardCopy,
  LoaderCircle,
  Lock,
  MapPinHouse,
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
import {
  UpdateProfileSettingPasswordIntoDB,
  UpdateProfileSettingsIntoDB,
} from "../_actions";
import PasswordShowClose from "@/components/PasswordShowClose";
import { toast } from "sonner";

const ProfileSettingForm = ({ entry }: { entry: any }) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const aamardokanId = entry?.aamardokanId;

  const personalInfoForm = useForm<z.infer<typeof PersonalInfoFormSchema>>({
    resolver: zodResolver(PersonalInfoFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      gender: "Male",
      dob: undefined,
    },
  });

  const addressForm = useForm<z.infer<typeof AddressFormSchema>>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  const securityForm = useForm<z.infer<typeof SecurityFormSchema>>({
    resolver: zodResolver(SecurityFormSchema),
    defaultValues: {
      password: "",
      re_password: "",
    },
  });

  useEffect(() => {
    if (entry?.id) {
      personalInfoForm.setValue("name", entry.name);
      personalInfoForm.setValue("phone", entry.phone);
      personalInfoForm.setValue("email", entry.email);
      personalInfoForm.setValue("gender", entry.gender || "Male");
      personalInfoForm.setValue(
        "dob",
        entry.dob ? new Date(entry.dob) : undefined
      );
      addressForm.setValue("street", entry.street);
      addressForm.setValue("city", entry.city);
      addressForm.setValue("state", entry.state);
      addressForm.setValue("zip", entry.zip);
      addressForm.setValue("country", entry.country);
      securityForm.setValue("password", "");
    }
  }, []);

  const handlePersonalInfoSubmit = async (
    data: z.infer<typeof PersonalInfoFormSchema>
  ) => {
    // console.log("Personal Info Submitted", data);
    try {
      setLoading1(true);
      const personalInfoRes = await UpdateProfileSettingsIntoDB(
        data,
        aamardokanId
      );
      // console.log("personal info update res:", personalInfoRes);
      if (personalInfoRes) {
        setLoading1(false);
        toast.success("Personal information updated successfully!");
      }
    } catch (error) {
      setLoading1(false);
      console.error("Error to update  personal info:", error);
    }
  };

  const handleAddressSubmit = async (
    data: z.infer<typeof AddressFormSchema>
  ) => {
    // console.log("Address Info Submitted", data);
    try {
      setLoading2(true);
      const addressUpdateRes = await UpdateProfileSettingsIntoDB(
        data,
        aamardokanId
      );
      if (addressUpdateRes) {
        setLoading2(false);
        toast.success("Address updated successfully!");
      }
    } catch (error) {
      setLoading2(false);
      console.error("Error to update address:", error);
    }
  };

  const handleSecuritySubmit = async (
    data: z.infer<typeof SecurityFormSchema>
  ) => {
    // console.log("Security Info Submitted", data);

    try {
      setLoading3(true);
      const updatePass = await UpdateProfileSettingPasswordIntoDB(
        data,
        aamardokanId
      );
      if (updatePass) {
        setLoading3(false);
        toast.success("Password updated successfully!");
      }
    } catch (error) {
      setLoading3(false);
      console.error("Error to update password:", error);
    }
  };

  return (
    <div className="xl:px-56 2xl:px-64 py-8 lg:py-16 space-y-8">
      {/* Personal Info Form */}
      <Form {...personalInfoForm}>
        <form
          onSubmit={personalInfoForm.handleSubmit(handlePersonalInfoSubmit)}
        >
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <UserCircle2Icon />
                <PageTitle title="Personal Information" />
              </span>

              {/* Name */}
              <FormField
                control={personalInfoForm.control}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <FormField
                  control={personalInfoForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          readOnly
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={personalInfoForm.control}
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
                <FormField
                  control={personalInfoForm.control}
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
                  control={personalInfoForm.control}
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
            {/* Submit Button */}
            <div className="flex  justify-end">
              <Button type="submit" className="mr-2">
                {loading1 ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <Save />
                )}
                {loading1 ? "Saving" : "Save"}
              </Button>
            </div>
          </div>
        </form>
      </Form>

      {/* Address form */}
      <Form {...addressForm}>
        <form onSubmit={addressForm.handleSubmit(handleAddressSubmit)}>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <MapPinHouse />
                <PageTitle title="Address" />
              </span>

              {/* Street */}
              <FormField
                control={addressForm.control}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* City */}
                <FormField
                  control={addressForm.control}
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
                  control={addressForm.control}
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
                  control={addressForm.control}
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
                  control={addressForm.control}
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
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" className="mr-2">
                {loading2 ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <Save />
                )}
                {loading2 ? "Saving" : "Save"}
              </Button>
            </div>
          </div>
        </form>
      </Form>

      {/* Security Form */}
      <Form {...securityForm}>
        <form onSubmit={securityForm.handleSubmit(handleSecuritySubmit)}>
          <div className="space-y-10">
            {/* security */}
            <div className="space-y-4">
              <span className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <Lock />
                <PageTitle title="Security" />
              </span>

              {/* Username */}
              <div className="flex items-center gap-4">
                <FormLabel>Username: </FormLabel>
                <p className="font-semibold text-gray-600 dark:text-gray-300">
                  {entry?.username}
                </p>

                <span
                  onClick={() => {
                    navigator.clipboard.writeText(entry?.username);
                    toast.success("Username copied to clipboard!");
                  }}
                >
                  <ClipboardCopy
                    size={24}
                    className="text-primary/80 hover:cursor-pointer"
                  />
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Password */}
                <FormField
                  control={securityForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={`${eyeOpen ? "text" : "password"}`}
                            placeholder="Enter new password"
                            {...field}
                          />
                          <PasswordShowClose
                            eyeOpen={eyeOpen}
                            setEyeOpen={setEyeOpen}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={securityForm.control}
                  name="re_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={`${eyeOpen ? "text" : "password"}`}
                            placeholder="Confirm password"
                            {...field}
                          />
                          <PasswordShowClose
                            eyeOpen={eyeOpen}
                            setEyeOpen={setEyeOpen}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" className="mr-2">
                {loading3 ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <Save />
                )}
                {loading3 ? "Saving" : "Save"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileSettingForm;
