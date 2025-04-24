import { StoreProductPage } from "@/components/store/pages/StoreProductPage";
import { getStoreProductData } from "@/lib/getData";

export default async function ProductIdRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getStoreProductData({ productId: id });

  return <StoreProductPage data={data} />;
}
