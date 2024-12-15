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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { BlogPostFormSchema } from "./BlogPostFormSchema";
import { useEffect, useState } from "react";
import type { z } from "zod";
import { CalendarIcon, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategoriesFromDB, SaveBlogIntoDB, TBlogPost } from "../_actions";
import Image from "next/image";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

export type TCategory = {
  id: string;
  name: string;
};

const BlogPostForm = ({ entry }: { entry: TBlogPost }) => {
  // console.log({ entry });
  const [photo, setPhoto] = useState<File | null>(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [loader, setLoader] = useState(false);
  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const router = useRouter();

  const form = useForm<z.infer<typeof BlogPostFormSchema>>({
    resolver: zodResolver(BlogPostFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      tags: "",
      categoryId: "",
      metaTitle: "",
      metaDescription: "",
      publishDate: undefined,
      content: "",
    },
  });

  const id = entry?.id;

  console.log(entry.photo);

  useEffect(() => {
    if (id) {
      form.setValue("title", entry.title);
      form.setValue("slug", entry.slug);
      form.setValue("tags", entry.tags);
      form.setValue("categoryId", entry.categoryId);
      form.setValue("metaTitle", entry.meta.title);
      form.setValue("metaDescription", entry.meta.description);
      form.setValue("publishDate", entry.publishDate);
      form.setValue("content", entry.content);
    }
  });

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

  async function onSubmit(data: z.infer<typeof BlogPostFormSchema>) {
    try {
      const formData = new FormData();
      if (photo) {
        formData.append("photo", photo);
      }
      loaderShow();
      const imgResponse = await axios.post(
        "/api/upload/blog-images",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { fileUrl } = imgResponse.data;

      const blogPostData = {
        title: data.title,
        slug: data.slug,
        tags: data.tags,
        categoryId: data.categoryId,
        publishDate: data.publishDate,
        content: data.content,
        meta: {
          title: data.metaTitle,
          description: data.metaDescription,
          keywords: data.tags,
        },
        photo: fileUrl,
      };

      const response = await SaveBlogIntoDB(blogPostData, id);
      if (response) {
        form.reset();
        toast.success(
          id ? "Blog Updated Successfully" : "Blog Created Successfully"
        );
        loaderClose();
        router.push("/admin/blog");
      } else {
        loaderClose();
        toast.error(id ? "Blog Update Failed" : "Blog Creation Failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error(id ? "Blog Update Failed" : "Blog Creation Failed!");
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
                  <FormLabel>Blog Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter blog title"
                      {...field}
                      onChangeCapture={(e) => handleSlug(e?.target?.value)}
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

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-[450px]"
                      placeholder="Write your blog content here..."
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
            {/* Publish Date */}
            <FormField
              control={form.control}
              name="publishDate"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                  <FormLabel>Publish Date</FormLabel>
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

            {/* Slug */}
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter slug (e.g., my-first-blog)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Meta Title */}
            <FormField
              control={form.control}
              name="metaTitle"
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
              name="metaDescription"
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

            {/* Tags */}
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter tags (comma-separated)"
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
              render={({ field }) => (
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

export default BlogPostForm;
