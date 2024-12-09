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
      <div className="flex">
        <Link href="/auth/sign-in" legacyBehavior passHref>
          <Button
            className="rounded-full text-primary text-md font-medium"
            variant="ghost"
          >
            Sign In
          </Button>
        </Link>
        <Link href="/auth/sign-up" legacyBehavior passHref>
          <Button className="rounded-full text-md font-medium bg-primary text-gray-900 hover:text-beige">
            Create a Free Account
          </Button>
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
