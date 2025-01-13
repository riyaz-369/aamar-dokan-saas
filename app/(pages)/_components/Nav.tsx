"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "POS",
    href: "/features#pos",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Warehouse",
    href: "/features#warehouse-management",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Procurement",
    href: "/features#procurement",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Inventory",
    href: "/features#stock-management",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Reporting",
    href: "/features#reporting-analytics",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Backup",
    href: "/features#data-backup",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Nav = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md font-medium text-gray-900 dark:text-gray-200">
              Our Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col items-center justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-4 no-underline outline-none focus:shadow-md"
                      href="/service/aamardokan-pos-system"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-4  text-lg font-medium">
                        <Image
                          // className="dark:invert"
                          src="/logo.svg"
                          alt="Aamar Dokan"
                          width={100}
                          height={38}
                          priority
                        />
                      </div>
                      <h3 className="text-md font-ador">আমার দোকান পস সিস্টেম</h3>
                      <p className="text-sm leading-tight text-muted-foreground">
                        বাংলাদেশের ব্যবসার জন্য সাশ্রয়ী, সহজ, এবং কার্যকরী
                        পস সিস্টেম। দোকানের বিক্রি থেকে শুরু করে স্টক
                        ব্যবস্থাপনা
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem
                
                  href="/service/pharmacy-pos-system"
                  title="ফার্মেসি পস সিস্টেম"
                >
                  ফার্মেসির ইনভেন্টরি এবং বিক্রয় সহজ ও কার্যকর করতে উন্নত সফটওয়্যার।
                </ListItem>
                <ListItem href="/service/restaurant-management" title="রেস্টুরেন্ট ম্যানেজমেন্ট সিস্টেম" className="pointer-events-none">
                    মেনু, টেবিল, এবং বিক্রয় পরিচালনায় সম্পূর্ণ ডিজিটাল সমাধান।
                </ListItem>
                <ListItem 
                className="pointer-events-none" href="/service/import-management-system" title="ইম্পোর্ট ম্যানেজমেন্ট সিস্টেম">
                আমদানি প্রক্রিয়া সহজ ও সময় সাশ্রয়ী করার জন্য সঠিক টুলস।
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md font-medium text-gray-900 dark:text-gray-200">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/price" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-md font-medium text-gray-900 dark:text-gray-200"
                )}
              >
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
