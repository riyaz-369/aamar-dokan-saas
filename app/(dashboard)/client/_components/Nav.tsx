"use client";

import Link from "next/link";
import { LucideIcon, Power } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants, Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    icon: LucideIcon;
    href: string;
  }[];
}

export function Nav({ links }: NavProps) {
  const pathName = usePathname();

  //   const logOutHandler = async () => {
  //     const signout = await signOut();
  //     if (signout) {
  //       router.push("/auth/login");
  //     }
  //   };

  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              buttonVariants({
                variant: link.href === pathName ? "default" : "ghost",
                size: "lg",
              }),
              "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start"
            )}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
          </Link>
        ))}

        <Button
          // onClick={logOutHandler}
          variant="ghost"
          className="justify-start "
        >
          <Power className="mr-2 ml-4 h-4 w-4" />
          Logout
        </Button>
      </nav>
    </div>
  );
}
