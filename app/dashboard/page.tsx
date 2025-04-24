import { TransactionsGrafic } from "@/components/dashboard/TransactionsGrafic";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { RecentSales } from "@/components/dashboard/RecentSales";

export default function DashboardRoute() {
  return (
    <>
      <DashboardStats />

      <section className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <TransactionsGrafic />

        <RecentSales />
      </section>
    </>
  );
}
