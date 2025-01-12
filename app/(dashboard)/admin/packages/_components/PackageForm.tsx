/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
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
// import FeaturesDialog from "./FeaturesDialog";
import { SavePackageIntoDB } from "../_actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Monitor, PlusIcon, Smartphone, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export type FeatureType = {
  title: string;
  value: string;
  isPhone: boolean;
  isDesktop: boolean;
  order: number;
};

type ServicesType = {
  id: string;
};

type ServicesPropsType = {
  length: number;
  services: ServicesType[];
  map(
    arg0: (service: any) => import("react").JSX.Element
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
  const [featuresState, setFeaturesState] = useState<FeatureType[]>([]);

  const loaderClose = () => setLoader(false);
  const loaderShow = () => setLoader(true);
  const router = useRouter();

  // console.log("entry:", entry);

  const form = useForm<z.infer<typeof PackageFormSchema>>({
    resolver: zodResolver(PackageFormSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      code: "",
      features: [],
      custom: false,
      isFree: false,
      price: {
        monthly: 0,
        yearly: 0,
      },
      status: "Active",
    },
  });

  // console.log(entry);

  const id = entry?.id;

  const defaultColors = [
    "#ff6a39",
    "#2ecc71",
    "#34495e",
    "#e67e22",
    "#1abc9c",
    "#e74c3c",
  ];

  const handleDragEnd = (event) => {
    const { source, destination } = event;

    // If no destination, exit
    if (!destination) return;

    const updatedFeatures = [...featuresState];
    const [movedFeature] = updatedFeatures.splice(source.index, 1);
    updatedFeatures.splice(destination.index, 0, movedFeature);

    setFeaturesState(updatedFeatures);
  };

  const handleAddNewFeature = () => {
    const newFeature = {
      title: "",
      value: "",
      isPhone: false,
      isDesktop: false,
      order: featuresState.length + 1,
    };
    setFeaturesState([...featuresState, newFeature]);
  };

  const handleDeleteFeature = (index: number) => {
    setFeaturesState((prevState) => prevState.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (id) {
      form.setValue("title", entry.title);
      form.setValue("subtitle", entry.subtitle);
      form.setValue("code", entry.code);
      form.setValue("features", entry.features);
      form.setValue("custom", entry.custom);
      form.setValue("isFree", entry.isFree);
      form.setValue("price.monthly", entry.price.monthly);
      form.setValue("price.yearly", entry.price.yearly);
      form.setValue("status", entry.status);
      form.setValue("color", entry.color);
      form.setValue("serviceId", entry.serviceId);
      setFeaturesState(entry.features);
    }
  }, []);

  async function onSubmit(data: z.infer<typeof PackageFormSchema>) {
    // console.log("form data:", { ...data, features: featuresState });
    try {
      loaderShow();
      const response = await SavePackageIntoDB(
        { ...data, features: featuresState },
        id
      );
      if (response) {
        form.reset();
        toast.success(
          id ? "Package Updated Successfully" : "Package Created Successfully"
        );
        loaderClose();
        router.push("/admin/packages");
      } else {
        loaderClose();
        toast.error(id ? "Package Update Failed" : "Package Creation Failed!");
      }
    } catch (error) {
      console.error(error);
      loaderClose();
    }
  }

  return (
    <div className="xl:px-16 2xl:px-36 py-8 lg:py-12 flex md:flex-row flex-col gap-y-8 md:gap-4">
      <div className="md:w-1/2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
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

              <div>
                <div className="flex justify-between w-full items-center gap-4">
                  {/* service */}
                  <FormField
                    control={form.control}
                    name="serviceId"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Services</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={entry ? entry.serviceId : field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.length > 0
                              ? services.map((service) => (
                                  <SelectItem
                                    key={service.id}
                                    value={service.id}
                                  >
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
                </div>

                <div className="flex justify-end">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 justify-end my-4">
                      <Label className="font-semibold">Is Free?</Label>
                      <Checkbox
                        // checked={entry?.isFree}
                        defaultChecked={entry?.isFree}
                        onCheckedChange={(isChecked) =>
                          form.setValue("isFree", isChecked)
                        }
                      />
                    </div>
                    <div className="flex items-center gap-1 justify-end my-4">
                      <Label className="font-semibold">Custom Price?</Label>
                      <Checkbox
                        defaultChecked={entry?.custom}
                        onCheckedChange={(isChecked) =>
                          form.setValue("custom", isChecked)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
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
                          placeholder="Enter code"
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
                    <FormItem className="min-w-20">
                      <FormLabel className="text-white dark:text-black">
                        Status
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={entry ? entry?.status : field.value}
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
              <div className="flex gap-2 justify-between">
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Select a color</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={entry ? entry.color : field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Color" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {defaultColors.length > 0
                            ? defaultColors.map((color) => (
                                <SelectItem key={color} value={color}>
                                  <span className="flex items-center gap-4 uppercase">
                                    <span
                                      className="h-5 w-16 cursor-pointer rounded"
                                      style={{ backgroundColor: color }}
                                      onClick={() => field.onChange(color)}
                                    />
                                    {color}
                                  </span>
                                </SelectItem>
                              ))
                            : "Color not found"}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <span>Or</span> */}
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem className="min-w-20">
                      <FormLabel>Pick a Color</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Input
                            type="color"
                            className="cursor-pointer"
                            value={field.value || defaultColors[0]}
                            onChange={(e) => field.onChange(e.target.value)}
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Submit Button */}
              <Button className="w-full md:w-auto" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="md:w-1/2 border px-4 rounded-md ">
        <div className="flex justify-between items-center border-b py-2 ">
          <h1 className="font-bold text-lg">Features</h1>
          <Button onClick={handleAddNewFeature}>
            <PlusIcon className="w-5 h-5 text-white" /> Add Feature
          </Button>
        </div>
        <div className="flex flex-col py-4 gap-2">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="features">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {featuresState.map((feature, index) => (
                    <Draggable
                      key={feature.order}
                      draggableId={feature.order.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="shadow-sm border rounded-md p-2 w-full flex gap-2 mb-2"
                        >
                          <Input
                            placeholder="Title"
                            className="max-h-6 rounded-sm text-xs w-3/6 p-1"
                            value={feature.title}
                            onChange={(e) =>
                              setFeaturesState((prevState) =>
                                prevState.map((f, i) =>
                                  i === index
                                    ? { ...f, title: e.target.value }
                                    : f
                                )
                              )
                            }
                          />
                          <Input
                            placeholder="Value"
                            className="max-h-6 rounded-sm text-xs w-1/6 p-1"
                            value={feature.value}
                            onChange={(e) =>
                              setFeaturesState((prevState) =>
                                prevState.map((f, i) =>
                                  i === index
                                    ? { ...f, value: e.target.value }
                                    : f
                                )
                              )
                            }
                          />
                          <div className="w-2/6 flex justify-end items-center gap-2">
                            <Monitor className="h-4 w-4" />
                            <Checkbox
                              checked={feature.isDesktop}
                              onCheckedChange={(isChecked) =>
                                setFeaturesState((prevState) =>
                                  prevState.map((f, i) =>
                                    i === index
                                      ? { ...f, isDesktop: isChecked }
                                      : f
                                  )
                                )
                              }
                            />
                            <Smartphone className="h-4 w-4" />
                            <Checkbox
                              checked={feature.isPhone}
                              onCheckedChange={(isChecked) =>
                                setFeaturesState((prevState) =>
                                  prevState.map((f, i) =>
                                    i === index
                                      ? { ...f, isPhone: isChecked }
                                      : f
                                  )
                                )
                              }
                            />
                            <X
                              className="h-4 w-4 cursor-pointer"
                              onClick={() => handleDeleteFeature(index)}
                            />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <Loader isOpen={loader} onClose={setLoader} title="Please Wait" />
    </div>
  );
};

export default PackageForm;
