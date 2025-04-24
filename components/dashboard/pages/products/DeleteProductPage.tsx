import { deleteProduct } from "@/app/actions/productActions";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const DeleteProductPage = ({ id }: { id: string }) => {
  return (
    <section className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-lg w-full p-5">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Are you absolutely sure you want to delete this product?
          </CardTitle>
          <CardDescription>
            This action cannot be undone. Please confirm that you want to delete
            this product.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex items-center justify-between gap-x-2">
          <Button variant={"outline"} asChild>
            <Link href={"/dashboard/products"}>Cancel</Link>
          </Button>

          {/* Form to delete the product */}
          <form action={deleteProduct}>
            <input type="hidden" name="productId" value={id} />

            <SubmitButton variant={"destructive"} text="delete" />
          </form>
        </CardFooter>
      </Card>
    </section>
  );
};
