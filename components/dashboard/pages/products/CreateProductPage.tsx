"use client";

import { createProduct } from "@/app/actions/productActions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { UploadDropzone } from "@/lib/uploadthing";
import { ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/lib/zodSchemas";
import { DashboardInput } from "@/components/dashboard/DashboardInput";
import Image from "next/image";
import { categories } from "@/data";
import { SubmitButton } from "@/components/SubmitButton";

export const CreateProductPage = () => {
  const [images, setImages] = useState<string[]>([]);
  console.log(images);

  const [lastResult, action] = useActionState(createProduct, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  // Funcion para eliminar la imagen
  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <form action={action} id={form.id} onSubmit={form.onSubmit}>
      <div className="flex items-center gap-4">
        <Button size={"icon"} variant={"outline"} asChild>
          <Link href={"/dashboard/products"}>
            <ChevronLeft className="size-4" />
          </Link>
        </Button>
        <h2 className="text-xl font-semibold tracking-tight">New Product</h2>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Product Details
          </CardTitle>
          <CardDescription>
            In this form you can create your product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <DashboardInput
              key={fields.name.key}
              name={fields.name.name}
              defaultValue={fields.name.initialValue}
              errors={fields.name.errors}
              id="productName"
              label="Name"
              type="text"
              placeholder="Product Name"
            />

            <DashboardInput
              key={fields.description.key}
              name={fields.description.name}
              defaultValue={fields.description.initialValue}
              errors={fields.description.errors}
              id="productDescription"
              label="Description"
              textArea={true}
              placeholder="Write your description right here..."
            />

            <DashboardInput
              key={fields.price.key}
              name={fields.price.name}
              defaultValue={fields.price.initialValue}
              errors={fields.price.errors}
              id="productPrice"
              label="Price"
              type="number"
              placeholder="$55"
            />

            <div className="flex flex-col gap-3">
              <Label htmlFor="productFeatured">Featured Product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                defaultValue={fields.isFeatured.initialValue}
                id="productFeatured"
                className="my-auto"
              />

              <p className="text-red-500">{fields.isFeatured.errors}</p>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-3">
                <Label htmlFor="productImage">Status</Label>
                <Select
                  key={fields.status.key}
                  name={fields.status.name}
                  defaultValue={fields.status.initialValue}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>

                <p className="text-red-500">{fields.status.errors}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Label>Category</Label>
                <Select
                  key={fields.category.key}
                  name={fields.category.name}
                  defaultValue={fields.category.initialValue}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <p className="text-red-500">{fields.category.errors}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="productImage">Images</Label>
              <input
                type="hidden"
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                defaultValue={fields.images.initialValue as string[]}
              />
              {images.length > 0 ? (
                <div className="flex gap-5">
                  {images.map((image, index) => (
                    <div className="relative size-[100px]" key={index}>
                      <Image
                        src={image}
                        height={100}
                        width={100}
                        alt="Product Image"
                        className="size-full object-cover rounded-lg border"
                      />

                      <Button
                        onClick={() => handleDelete(index)}
                        variant={"destructive"}
                        size={"icon"}
                        className="absolute -top-3 -right-3 rouned-lg size-7"
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint={"imageUploader"}
                  onClientUploadComplete={(res) => {
                    setImages(res.map((r) => r.url));
                  }}
                  onUploadError={() => {
                    alert("Error uploading file");
                  }}
                />
              )}

              <p className="text-red-500">{fields.images.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton className="w-44 h-10" text="Create Product" />
        </CardFooter>
      </Card>
    </form>
  );
};
