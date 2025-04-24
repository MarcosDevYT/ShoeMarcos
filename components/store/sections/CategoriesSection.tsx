import { categorySectionData } from "@/data";
import Image from "next/image";
import Link from "next/link";

export const CategoriesSection = () => {
  return (
    <section className="py-24 sm:py-32">
      <aside className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Shop by Category
        </h2>

        <Link
          className="text-base sm:text-lg font-semibold text-primary hover:text-primary/80"
          href={"/products/all"}
        >
          Browse all Products &rarr;
        </Link>
      </aside>
      <article className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        {categorySectionData.map((category) => (
          <div
            key={category.id}
            className={`relative group rounded-xl h-[320px] w-full overflow-hidden ${
              category.id === 0 && "sm:row-span-2 sm:h-[665px] lg:h-[672px]"
            }`}
          >
            <Image
              src={category.src}
              alt={category.title}
              width={720}
              height={600}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/55">
              <Link
                href={category.href}
                className="p-4 w-full h-full flex flex-col justify-end text-white"
              >
                <h3 className="font-semibold">{category.title}</h3>
                <p className="mt-1 text-sm">Shop Now</p>
              </Link>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
