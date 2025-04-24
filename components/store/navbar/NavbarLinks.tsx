"use client";

import { navbarLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex justify-center items-center gap-x-2 ml-5">
      {navbarLinks.map((link) => (
        <li key={link.id}>
          <Link
            className={`${
              pathname === link.href
                ? "text-black bg-gray-200"
                : "text-muted-foreground hover:text-black hover:bg-gray-200"
            } font-medium px-3 py-2 rounded-lg transition-colors ease-in-out duration-200`}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
