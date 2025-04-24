import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOrdersData } from "@/lib/getData";

export default async function OrdersPage() {
  const data = await getOrdersData();

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle className="text-3xl font-semibold">Orders</CardTitle>
        <CardDescription>Recent orders from your store!</CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          {/* Table Header */}
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={item.User.profileImage} />
                  </Avatar>
                  <div>
                    <p className="font-medium">{item.User.firstName}</p>
                    <p className="hidden md:flex text-sm text-muted-foreground">
                      {item.User.email}
                    </p>
                  </div>
                </TableCell>
                <TableCell>Order</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  {new Intl.DateTimeFormat("en-US").format(item.createdAt)}
                </TableCell>
                <TableCell className="text-right text-green-600">
                  ${new Intl.NumberFormat("en-US").format(item.amount / 100)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
