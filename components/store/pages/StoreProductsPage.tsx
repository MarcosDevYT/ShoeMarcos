import { ProductCard } from "../ProductCard";

interface StoreProductsPageProps {
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
  }[];
  title: string;
}

export const StoreProductsPage = ({ data, title }: StoreProductsPageProps) => {
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>

      <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </article>
    </section>
  );
};
