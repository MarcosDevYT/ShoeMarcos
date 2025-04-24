import { ImageSlider } from "@/components/ImageSlider";
import { StarIcon } from "lucide-react";
import { FeaturedSection } from "../sections/FeaturedSection";
import { addItem } from "@/app/actions/redisActions";
import { ShoppingBagButton } from "@/components/SubmitButton";

interface ProductPageProps {
  data: {
    images: string[];
    name: string;
    price: number;
    description: string;
    id: string;
  };
}

export const StoreProductPage = ({ data }: ProductPageProps) => {
  const addProductToShoppingCart = addItem.bind(null, data.id);

  return (
    <>
      <section className="grid md:grid-cols-2 gap-6 items-start lg: gap-x-24 py-8 mb-12 ">
        {/* Product Image Carousel */}
        <ImageSlider images={data.images} />

        {/* Product Info */}
        <article>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {data.name}
          </h1>
          <p className="mt-2 inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-2xl font-semibold text-primary ring-1 ring-inset ring-primary/40">
            ${data.price}
          </p>

          <div className="mt-3 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <StarIcon
                key={item}
                className="size-4 text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>

          <p className="text-base text-gray-700 mt-6">{data.description}</p>

          <form action={addProductToShoppingCart}>
            <ShoppingBagButton />
          </form>
        </article>
      </section>

      <FeaturedSection />
    </>
  );
};
