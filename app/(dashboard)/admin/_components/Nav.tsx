"use client";

import Link from "next/link";
import { LucideIcon, Power } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants, Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import React from "react";

interface NavProps {
  links: {
    title: string;
    icon: LucideIcon | unknown;
    href: string;
  }[];
}

export function Nav({ links }: NavProps) {
  const pathName = usePathname();

  return (
    <div className="group flex flex-col gap-4 py-2">
      <nav className="grid gap-1 px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              buttonVariants({
                variant: link.href === pathName ? "default" : "ghost",
                size: "lg",
              }),
              "justify-start px-4",
            )}
          >
            {React.createElement(link.icon as React.ElementType, {
              className: "",
            })}
            {link.title}
          </Link>
        ))}

        <Button variant="ghost" className="justify-start ">
          <Power className="" />
          Logout
        </Button>
      </nav>
    </div>
  );
}
