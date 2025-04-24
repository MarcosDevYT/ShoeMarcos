import { getFeaturedData } from "@/lib/getData";
import { LoadingProductCard, ProductCard } from "../ProductCard";
import { Suspense } from "react";

export const FeaturedSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-tight">Featured Items</h2>

      <Suspense fallback={<LoadingRows />}>
        <LoadFeaturedProducts />
      </Suspense>
    </section>
  );
};

async function LoadFeaturedProducts() {
  const data = await getFeaturedData();

  return (
    <article className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </article>
  );
}

const LoadingRows = () => {
  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[...Array(3)].map((_, index) => (
        <LoadingProductCard key={index} />
      ))}
    </div>
  );
};
