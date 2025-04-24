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
import { BannerTable } from "../../BannerTable";

export const BannerPage = async () => {
  return (
    <section>
      <article className="flex items-center justify-end">
        <Button asChild className="flex gap-x-2">
          <Link href={"/dashboard/banner/create"}>
            <PlusCircle className="size-4" />
            <span>Add Banner</span>
          </Link>
        </Button>
      </article>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Banners</CardTitle>
          <CardDescription>Manage your banners</CardDescription>
        </CardHeader>
        <CardContent>
          <BannerTable />
        </CardContent>
      </Card>
    </section>
  );
};
