import { CircleUser, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { DashboardNavigation } from "./DashboardNavigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const DashboardNavbar = () => {
  return (
    <header className="sticky top-0 h-16 flex items-center justify-between bg-white gap-4 border-b">
      <nav className="hidden md:flex font-medium flex-row items-center gap-5 text-sm lg:gap-6">
        <DashboardNavigation />
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="shrink-0 md:hidden"
            variant={"outline"}
            size="icon"
          >
            <Menu className="size-5" strokeWidth={3} />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4" side="left">
          <div className="mt-6">
            <SheetTitle>
              <span>Logo</span>
            </SheetTitle>
            <nav className="grid gap-6 text-lg font-medium mt-5">
              <DashboardNavigation />
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"} size={"icon"} className="rounded-full">
            <CircleUser className="size-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <LogoutLink>Logout</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
