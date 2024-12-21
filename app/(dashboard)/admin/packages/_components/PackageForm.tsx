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
import { Textarea } from "@/components/ui/textarea";
import type { z } from "zod";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/Loader";
import { PackageFormSchema } from "./PackageFormSchema";
import FeaturesDialog from "./FeaturesDialog";
import { SavePackageIntoDB } from "../_actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const features = [
  { feature: "Store" },
  { feature: "Backup" },
  { feature: "SMS Service" },
  { feature: "Reports" },
  { feature: "Custom Branding" },
  { feature: "Sales Management" },
  { feature: "Inventory Management" },
  { feature: "Customer Support" },
  { feature: "Store Management" },
  { feature: "Product Management" },
  { feature: "Customer Records" },
  { feature: "Sales Tracking" },
  { feature: "Barcode Printing" },
  { feature: "Discount Management" },
  { feature: "Product Stock Alerts" },
  { feature: "Invoice Receipt Printing" },
  { feature: "Daily Sales Summary" },
  { feature: "Excel PDF Reports Export" },
  { feature: "Role Based Access Control" },
  { feature: "Supplier Management" },
  { feature: "Real Time Stock Synchronization" },
  { feature: "Promotions" },
  { feature: "Dynamic Tax Settings" },
  { feature: "Purchase Return Loss Management" },
  { feature: "Mobile App Access" },
  { feature: "Self Hosting" },
];

export type FeatureType = {
  feature: string;
  isGet: boolean;
};

type ServicesType = {
  id: string;
};

type ServicesPropsType = {
  length: number;
  services: ServicesType[];
  map(
    arg0: (service: any) => import("react").JSX.Element,
  ): import("react").ReactNode;
};

const PackageForm = ({
  entry,
  services,
}: {
  entry: any;
  services: ServicesPropsType;
}) => {
  const [loader, setLoader] = useState(false);
  const [featuresState, setFeaturesState] = useState<FeatureType[]>(
    features.map((feature) => ({ ...feature, isGet: false })),
  );
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const router = useRouter();

  const form = useForm<z.infer<typeof PackageFormSchema>>({
    resolver: zodResolver(PackageFormSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      code: "",
      features: [],
      price: {
        monthly: 0,
        yearly: 0,
      },
    },
  });

  // console.log(entry);

  const id = entry?.id;

  useEffect(() => {
    if (id) {
      form.setValue("title", entry.title);
      form.setValue("subtitle", entry.subtitle);
      form.setValue("code", entry.code);
      form.setValue("features", entry.features);
      form.setValue("price.monthly", entry.price.monthly);
      form.setValue("price.yearly", entry.price.yearly);
    }
  }, []);

  async function onSubmit(data: z.infer<typeof PackageFormSchema>) {
    // console.log({ ...data, features: featuresState });
    try {
      loaderShow();
      const response = await SavePackageIntoDB(
        { ...data, features: featuresState },
        id,
      );
      if (response) {
        form.reset();
        toast.success(
          id ? "Package Updated Successfully" : "Package Created Successfully",
        );
        loaderClose();
        router.push("/admin/packages");
      } else {
        loaderClose();
        toast.error(id ? "Package Update Failed" : "Package Creation Failed!");
      }
    } catch (error) {
      console.log(error);
      loaderClose();
    }
  }

  return (
    <div className="xl:px-24 2xl:px-48 py-8 lg:py-16 flex flex-row-reverse">
      <FeaturesDialog
        featuresState={featuresState}
        setFeaturesState={setFeaturesState}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full grid lg:grid-cols-6 gap-8 relative"
        >
          <div className="lg:col-span-4 space-y-4">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter service title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* subtile */}
            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-32"
                      placeholder="Enter a detailed subtitle"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* service */}
            <FormField
              control={form.control}
              name="serviceId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Services</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.length > 0
                        ? services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))
                        : "Service not found"}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              {/* price monthly */}
              <FormField
                control={form.control}
                name="price.monthly"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Monthly Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter price (e.g., 500, 1000)"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* price */}
              <FormField
                control={form.control}
                name="price.yearly"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Yearly Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter price (e.g., 500, 1000)"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2 justify-between">
              {/* code */}
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter code (e.g., pack0023)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white dark:text-black">
                      Status
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Submit Button */}
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
      <Loader isOpen={loader} onClose={setLoader} title="Please Wait" />
    </div>
  );
};

export default PackageForm;
