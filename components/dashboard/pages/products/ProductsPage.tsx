import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { ProductsTable } from "../../ProductsTable";

export const ProductsPage = async () => {
  return (
    <section>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href={"/dashboard/products/create"}>
            <PlusCircle className="size-4" />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ProductsTable />
        </CardContent>
      </Card>
    </section>
  );
};
