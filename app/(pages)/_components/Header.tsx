"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun, UserCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();

  const userType = session?.user?.role;

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down, hide navbar
        setHidden(true);
      } else {
        // Scrolling up, show navbar
        setHidden(false);
      }

      // Update last scroll position
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;

      // Apply glassy effect
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "z-50 flex items-center justify-between lg:px-12 px-4 py-4 sticky top-0 transition-all duration-300",
        hidden && "transform -translate-y-full", // Hide navbar when scrolling down
        scrolled
          ? "bg-white bg-opacity-60 backdrop-blur-lg dark:bg-black dark:bg-opacity-60 dark:backdrop-blur-lg"
          : "bg-transparent",
      )}
    >
      <div className="flex">
        <Link href="/">
          <Image
            src="/logo-h.svg"
            alt="Aamar Dokan"
            width={180}
            height={30}
            priority
          />
        </Link>
      </div>
      <div className="hidden lg:flex justify-end items-end">
        <Nav />
      </div>
      <div className="flex items-center justify-center gap-3 lg:hidden">
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
        <MobileNav />
      </div>
      <div className="hidden lg:flex gap-2">
        {session?.user ? (
          <Link href={userType.toLowerCase()} legacyBehavior passHref>
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
