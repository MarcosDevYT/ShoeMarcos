import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBag } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redis } from "@/lib/redis";
import { Cart } from "@/lib/interfaces";

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const cart: Cart | null = await redis.get(`cart-${user?.id}`);

  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-2">
      <nav className="flex items-center">
        <Link href={"/"} className="flex items-center">
          <h1 className="text-black font-extrabold text-xl sm:text-2xl lg:text-3xl">
            Shoe<span className="text-indigo-600">Marcos</span>
          </h1>
        </Link>
        <NavbarLinks />
      </nav>

      <div className="flex items-center">
        {user ? (
          <>
            <Link href={"/bag"} className="group p-2 flex items-center mr-2">
              <ShoppingBag className="size-6 text-muted-foreground group-hover:text-primary transition-all" />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-primary">
                {total}
              </span>
            </Link>

            <UserDropdown
              email={user.email as string}
              name={user.given_name as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          </>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
            <Button asChild variant={"ghost"}>
              <LoginLink>Sign In</LoginLink>
            </Button>
            <span className="h-6 w-px bg-gray-200" />
            <Button asChild variant={"ghost"}>
              <RegisterLink>Create Account</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
