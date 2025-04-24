import { LoadingProductCard } from "@/components/store/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingFile() {
  return (
    <div>
      <Skeleton className="h-10 w-56 my-5" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, index) => (
          <LoadingProductCard key={index} />
        ))}
      </div>
    </div>
  );
}
