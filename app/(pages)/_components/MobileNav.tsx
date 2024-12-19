import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlignJustify,
  AppWindow,
  BadgeDollarSign,
  Book,
  CircleHelp,
  Contact,
  Home,
  Shapes,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Nav from "./Nav";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";

const MobileNav = () => {
  const { data: session } = useSession();

  const userType = session?.user?.role;

  return (
    <Sheet>
      <SheetTrigger>
        {/* <Button variant="ghost"> */}
        <AlignJustify className="h-6 w-6 text-primary" />
        {/* </Button> */}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-2">
            <div className="flex">
              <Link href="/">
                <Image
                  src="/logo-h.svg"
                  alt="Aamar Dokan"
                  width={150}
                  height={28}
                  priority
                />
              </Link>
            </div>
          </SheetTitle>
          <Separator />
        </SheetHeader>

        <SheetDescription className="flex flex-col h-full mt-4">
          <div className="flex-1 overflow-y-auto">
            <ul className="mt-4 px-4 space-y-6">
              <li>
                <Link
                  href="/"
                  className="flex justify-start gap-3 items-center text-lg font-medium"
                >
                  <Home className="h-5 w-5 " /> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex justify-start gap-3 items-center text-lg font-medium"
                >
                  <Book className="h-5 w-5 " /> About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="flex justify-start gap-3 items-center text-lg font-medium"
                >
                  <Shapes className="h-5 w-5 " /> Features
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="flex justify-start gap-3 items-center text-lg font-medium"
                >
                  <BadgeDollarSign className="h-5 w-5 " /> Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="flex justify-start gap-3 items-center text-lg font-medium"
                >
                  <AppWindow className="h-5 w-5 " /> Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="flex justify-start gap-3 items-center text-lg font-medium"
                >
                  <CircleHelp className="h-5 w-5 " /> FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-t py-2 flex items-center justify-between gap-4 mb-10">
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
              <div className="flex justify-between w-full">
                <Link href="/auth/sign-in" legacyBehavior passHref>
                  <button className="rounded-full py-2 px-2 text-primary text-md font-medium">
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
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
