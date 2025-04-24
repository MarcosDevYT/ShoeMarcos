import { EditProductPage } from "@/components/dashboard/pages/products/EditProductPage";
import { getProductEditData } from "@/lib/getData";

export default async function EditProductRoute({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const data = await getProductEditData(id);

  return <EditProductPage data={data} />;
}
