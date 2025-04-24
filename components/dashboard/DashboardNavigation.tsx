"use client";

import { DashboardLinks } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DashboardNavigation = () => {
  const pathname = usePathname();

  return (
    <>
      {DashboardLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};
