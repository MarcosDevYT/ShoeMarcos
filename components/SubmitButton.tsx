"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2, ShoppingBag } from "lucide-react";

interface buttonProps {
  text: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  className?: string;
}

export const SubmitButton = ({ text, variant, className }: buttonProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className={className} variant={variant} disabled>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button className={className} variant={variant} type="submit">
          {text}
        </Button>
      )}
    </>
  );
};

export const ShoppingBagButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size={"lg"} className="w-full mt-5">
          <Loader2 className="mr-4 size-5 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button size={"lg"} className="w-full mt-5" type="submit">
          <ShoppingBag className="mr-4 size-5" /> Add to Cart
        </Button>
      )}
    </>
  );
};

export const DeleteItem = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button className="cursor-pointer font-medium text-red-500 text-end">
          Removing...
        </button>
      ) : (
        <button
          type="submit"
          className="cursor-pointer font-medium text-red-500 text-end"
        >
          Delete
        </button>
      )}
    </>
  );
};

export const CheckOutButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button size={"lg"} className="w-full mt-5" disabled>
          <Loader2 className="mr-4 size-5 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button size={"lg"} className="w-full mt-5" type="submit">
          CheckOut
        </Button>
      )}
    </>
  );
};
