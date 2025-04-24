import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10).max(400),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().min(1).positive(),
  images: z.array(z.string()).min(1, "At least one image is required"),
  category: z.enum(["men", "women", "kids"]),
  isFeatured: z.boolean().optional(),
});

export const bannerSchema = z.object({
  title: z.string(),
  imageString: z.string(),
});
