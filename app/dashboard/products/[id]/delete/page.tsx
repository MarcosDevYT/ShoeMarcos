import { DeleteProductPage } from "@/components/dashboard/pages/products/DeleteProductPage";

export default async function DeleteRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <DeleteProductPage id={id} />;
}
