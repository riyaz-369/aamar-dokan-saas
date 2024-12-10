"use client";
import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between px-12 py-4">
      <div className="flex">
        <Link href="/">
          <Image
            //   className="dark:invert"
            src="/logo-h.svg"
            alt="Aamar Dokan"
            width={200}
            height={38}
            priority
          />
        </Link>
      </div>
      <div className="flex  justify-end items-end">
        <Nav />
      </div>
      <div className="flex gap-2">
        <Link href="/auth/sign-in" legacyBehavior passHref>
          <div className="rounded-full py-2 px-4 text-primary text-md font-medium hover:cursor-pointer">
            Sign In
          </div>
        </Link>
        <Link href="/auth/sign-up" legacyBehavior passHref>
          <div className="rounded-full py-2 px-4 text-md font-medium bg-primary text-beige hover:cursor-pointer">
            Create a Free Account
          </div>
        </Link>
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4 text-primary" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Header;
