"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
// import DashboardProfile from "./DashboardProfile";
import { Button } from "@/components/ui/button";
import { Bell, Languages, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
const DashboardBreadCrumb = () => {
  const pathName = usePathname();
  const segments = pathName.split("/").filter((segment) => segment);
  //   console.log(segments);

  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-between items-center w-full z-50">
      <Breadcrumb>
        <BreadcrumbList>
          {segments.map((segment, index) => {
            const segmentPath = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;

            return (
              <BreadcrumbItem
                key={segment}
                className="hidden md:flex items-center space-x-2"
              >
                {/* Separator */}
                {isLast ? (
                  <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">
                      {decodeURIComponent(segment).replace("-", " ")}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <>
                    <BreadcrumbLink href={segmentPath} className="capitalize">
                      {" "}
                      {decodeURIComponent(segment).replace("-", " ")}
                    </BreadcrumbLink>
                    <BreadcrumbSeparator className="hidden md:block" />
                  </>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-center">
        <Button variant="ghost">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost">
          <Languages className="h-4 w-4" />
        </Button>
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

export default DashboardBreadCrumb;
