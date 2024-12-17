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
import { CreateServiceFormSchema } from "./CreateServiceFormSchema";
import type { z } from "zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TCategory } from "../../blog/_components/BlogPostForm";
import { getCategoriesFromDB } from "../../_action";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SaveServiceIntoDB } from "../_actions";
import { toast } from "sonner";
import Loader from "@/components/Loader";

const ServiceForm = ({ entry }: { entry: any }) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [loader, setLoader] = useState(false);
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const router = useRouter();

  const form = useForm<z.infer<typeof CreateServiceFormSchema>>({
    resolver: zodResolver(CreateServiceFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      code: "",
      categoryId: "",
      description: "",
      tos: "",
      privacyPolicy: "",
      meta: {
        metaTitle: "",
        metaDescription: "",
      },
    },
  });

  const id = entry?.id;

  useEffect(() => {
    if (id) {
      form.setValue("title", entry.title);
      form.setValue("slug", entry.slug);
      form.setValue("code", entry.code);
      form.setValue("categoryId", entry.categoryId);
      form.setValue("description", entry.description);
      form.setValue("tos", entry.tos);
      form.setValue("privacyPolicy", entry.privacyPolicy);
      form.setValue("meta", entry.meta);
    }
  }, []);

  const fetchCategories = async () => {
    const res = await getCategoriesFromDB();
    if (res) {
      setCategories(res);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSlug = (title: string) => {
    const slug = title.split(" ").join("-").toLowerCase();
    form.setValue("slug", slug);
  };

  async function onSubmit(data: z.infer<typeof CreateServiceFormSchema>) {
    try {
      const formData = new FormData();
      if (photo) {
        formData.append("photo", photo);
      }
      loaderShow();
      const imgResponse = await axios.post(
        "/api/upload/service-images",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { fileUrl, success } = imgResponse.data;
      // console.log(fileUrl, success);

      // console.log("Service data submitted:", {
      //   ...data,
      //   photo: fileUrl,
      // });

      const response = await SaveServiceIntoDB({ ...data, photo: fileUrl }, id);
      if (response) {
        form.reset();
        toast.success(
          id ? "Service Updated Successfully" : "Service Created Successfully"
        );
        loaderClose();
        router.push("/admin/services");
      } else {
        loaderClose();
        toast.error(id ? "Service Update Failed" : "Service Creation Failed!");
      }
    } catch (error) {
      console.log(error);
      loaderClose();
    }
  }

  return (
    <div className="xl:px-24 2xl:px-48 py-8 lg:py-16">
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
                    <Input
                      placeholder="Enter service title"
                      {...field}
                      onChangeCapture={(e) => handleSlug(e?.target?.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter a detailed description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Category */}
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Packages */}
            <FormField
              control={form.control}
              name="packageId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Packages</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter packages" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Terms of Service */}
            <FormField
              control={form.control}
              name="tos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Terms of Service</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the terms of service"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Privacy Policy */}
            <FormField
              control={form.control}
              name="privacyPolicy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Privacy Policy</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the privacy policy"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Submit Button */}
            <div className="flex justify-end w-full absolute lg:right-1/3 lg:mr-3">
              <Button type="submit" className="w-full md:w-auto">
                Submit
              </Button>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            {/* Slug */}
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter slug (e.g., my-service-slug)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Code */}
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter service code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Meta Title */}
            <FormField
              control={form.control}
              name="meta.metaTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meta Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter meta title for SEO" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Meta Description */}
            <FormField
              control={form.control}
              name="meta.metaDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meta Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter meta description for SEO"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="photo"
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center bg-muted rounded-lg p-4 border border-dashed border-primary">
                      <Input
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files
                            ? e.target.files[0]
                            : null;
                          setPhoto(file);

                          // Generate a preview for the selected image
                          if (file) {
                            const previewUrl = URL.createObjectURL(file);
                            setImagePreviews([previewUrl]);
                          } else {
                            setImagePreviews([]);
                          }
                        }}
                      />
                      <div className="flex flex-col items-center text-gray-600 pointer-events-none">
                        <ImageIcon size={32} className="text-primary" />
                        <span className="mt-1 text-sm">
                          {imagePreviews.length || entry.photo
                            ? "Change Photo"
                            : "Add Photo"}
                        </span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Preview Section */}
            {imagePreviews.length > 0 ? (
              <div className="mt-4">
                <Image
                  src={imagePreviews[0]}
                  alt="Selected Preview"
                  height={300}
                  width={300}
                  className="w-full rounded border"
                />
              </div>
            ) : (
              entry.photo && (
                <Image
                  src={entry.photo}
                  alt="Selected Preview"
                  height={300}
                  width={300}
                  className="w-full rounded border"
                />
              )
            )}
          </div>
        </form>
      </Form>
      <Loader isOpen={loader} onClose={setLoader} title="Please Wait" />
    </div>
  );
};

export default ServiceForm;
