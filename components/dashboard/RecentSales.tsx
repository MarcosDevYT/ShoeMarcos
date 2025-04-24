import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecentSales } from "@/lib/getData";

export const RecentSales = async () => {
  const data = await getRecentSales();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">Recents Sales</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-8">
        {data.map((item) => (
          <div className="flex items-center gap-4" key={item.id}>
            <Avatar className="hidden sm:flex size-9">
              <AvatarFallback>{item.User.firstName.slice(0, 2)}</AvatarFallback>
              <AvatarImage src={item.User.profileImage} alt="Avatar Image" />
            </Avatar>

            <div className="grid">
              <p className="text-sm font-medium">{item.User.firstName}</p>
              <p className="text-sm text-muted-foreground">{item.User.email}</p>
            </div>
            <p className="ml-auto font-medium text-green-600">
              +${new Intl.NumberFormat("en-US").format(item.amount / 100)}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
