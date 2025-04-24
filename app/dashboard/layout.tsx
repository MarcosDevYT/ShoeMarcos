import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "oliviaschoriza@gmail.com") {
    return redirect("/");
  }

  return (
    <div className="w-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <DashboardNavbar />
      <main className="my-5">{children}</main>
    </div>
  );
}
