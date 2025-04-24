import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { getUserDataStats } from "@/lib/getData";

export const DashboardStats = async () => {
  const { user, products, order } = await getUserDataStats();

  const totalAmount = order.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  return (
    <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <StatsCard
        icon={<DollarSign className="size-5 text-green-600" />}
        title="Total Revenue"
      >
        <p className="text-2xl font-bold">
          ${new Intl.NumberFormat("en-US").format(totalAmount / 100)}
        </p>
        <p className="text-xs text-muted-foreground">Based on 100 Charges</p>
      </StatsCard>

      <StatsCard
        icon={<ShoppingBag className="size-5 text-blue-500" />}
        title="Total Sales"
      >
        <p className="text-2xl font-bold">+{order.length}</p>
        <p className="text-xs text-muted-foreground">
          Total Sales on ShoeMarcos
        </p>
      </StatsCard>

      <StatsCard
        icon={<PartyPopper className="size-5 text-indigo-500" />}
        title="Total Products"
      >
        <p className="text-2xl font-bold">{products.length}</p>
        <p className="text-xs text-muted-foreground">Total Products Created</p>
      </StatsCard>

      <StatsCard
        icon={<User2 className="size-5 text-orange-500" />}
        title="Total Users"
      >
        <p className="text-2xl font-bold">{user.length}</p>
        <p className="text-xs text-muted-foreground">Total Users Signed Up</p>
      </StatsCard>
    </section>
  );
};
