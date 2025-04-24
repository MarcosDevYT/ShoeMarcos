import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import { DashboardActions } from "./DashboardActions";
import { getBannerData } from "@/lib/getData";

export const BannerTable = async () => {
  const data = await getBannerData();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="text-end">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Image
                alt="Banner Image"
                src={item.imageString}
                height={128}
                width={256}
                className="object-cover w-64 h-32 rounded-md"
              />
            </TableCell>
            <TableCell className="font-medium">{item.title}</TableCell>
            <TableCell className="text-end">
              <DashboardActions route="banner" id={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
