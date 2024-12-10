"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import DashboardProfile from "./DashboardProfile";

const DashboardNavbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={`sticky top-0 px-8 shadow-sm
      }`}
    >
      <div className="py-2 flex items-center justify-between">
        {/* <Logo /> */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-semibold flex items-center gap-1 text-gray-700 dark:text-gray-100"
          >
            <IoArrowBack size={18} />
            Back to Home
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <DashboardProfile />
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
    </header>
  );
};

export default DashboardNavbar;
