"use client";

import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  User,
  User2,
  User2Icon,
  UserCircle,
  UserX2Icon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();

  console.log(session?.user);

  return (
    <div className="flex items-center justify-between px-12 py-4">
      <div className="flex">
        <Link href="/">
          <Image
            // className="dark:invert"
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
        {session?.user ? (
          <Link href="/auth/sign-in" legacyBehavior passHref>
            <Button
              variant="ghost"
              className={cn("rounded-full py-2 px-4 text-md font-medium")}
            >
              <UserCircle className="h-5 w-5" />
              My Account
            </Button>
          </Link>
        ) : (
          <div>
            <Link href="/auth/sign-in" legacyBehavior passHref>
              <button className="rounded-full py-2 px-4 text-primary text-md font-medium">
                Sign In
              </button>
            </Link>

            <Link href="/auth/sign-up" legacyBehavior passHref>
              <Button className="rounded-full py-2 px-4 text-md font-medium">
                Create a Free Account
              </Button>
            </Link>
          </div>
        )}

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
