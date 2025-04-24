import { DeleteBannerPage } from "@/components/dashboard/pages/banner/DeleteBannerPage";

export default async function DeleteBannerRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DeleteBannerPage id={id} />;
}
