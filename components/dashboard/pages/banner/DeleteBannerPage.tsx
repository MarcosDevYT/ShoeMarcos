import { deleteBanner } from "@/app/actions/bannerActions";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDeleteData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";

export const DeleteBannerPage = async ({ id }: { id: string }) => {
  const data = await getDeleteData(id);

  return (
    <section className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-lg w-full p-5">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            Are you absolutely sure you want to delete this Banner?
          </CardTitle>
          <CardDescription>
            This action cannot be undone. Please confirm that you want to delete
            this banner.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Image
            src={data[0].imageString}
            alt="Banner Image"
            height={256}
            width={512}
            className="w-full h-fit rounded-md object-cover"
          />
        </CardContent>

        <CardFooter className="w-full flex items-center justify-between gap-x-2">
          <Button variant={"outline"} asChild>
            <Link href={"/dashboard/banner"}>Cancel</Link>
          </Button>

          {/* Form to delete the product */}
          <form action={deleteBanner}>
            <input type="hidden" name="bannerId" value={id} />

            <SubmitButton variant={"destructive"} text="delete" />
          </form>
        </CardFooter>
      </Card>
    </section>
  );
};
