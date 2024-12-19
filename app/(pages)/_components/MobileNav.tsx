import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, UserCircle } from "lucide-react";
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
          <SheetTitle>
            <div className="flex">
              <Link href="/">
                <Image
                  src="/logo-h.svg"
                  alt="Aamar Dokan"
                  width={200}
                  height={38}
                  priority
                />
              </Link>
            </div>
          </SheetTitle>
          <Separator />
          <SheetDescription className="mt-12">
            <div className="flex gap-2">
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
            </div>
            <Nav />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
