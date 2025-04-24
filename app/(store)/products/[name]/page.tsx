import { StoreProductsPage } from "@/components/store/pages/StoreProductsPage";
import { getCategoriesData } from "@/lib/getData";

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const { data, title } = await getCategoriesData(name);

  return <StoreProductsPage data={data} title={title} />;
}
