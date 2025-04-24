import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chart } from "./Chart";
import { getTransactionsData } from "@/lib/getData";

export const TransactionsGrafic = async () => {
  const data = await getTransactionsData();

  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">Transactions</CardTitle>
        <CardDescription>
          Recent Transactions from the last 7 days
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Chart data={data} />
      </CardContent>
    </Card>
  );
};
