import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { DashboardActions } from "./DashboardActions";
import { getProductsData } from "@/lib/getData";

export const ProductsTable = async () => {
  const data = await getProductsData();

  return (
    <Table>
      {/* Table Header */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      {/* Table Body */}
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Image
                alt="Product Image"
                src={item.images[0]}
                width={64}
                height={64}
                className="rounded-md object-cover size-16"
              />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>
              {new Intl.DateTimeFormat("en-US").format(item.createdAt)}
            </TableCell>

            {/* Actions Button */}
            <TableCell>
              <DashboardActions edit route="products" id={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
