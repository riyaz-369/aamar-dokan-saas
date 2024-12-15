import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

export default function PageTitle({ title, className }: Props) {
  return (
    <h1 className={cn("text-2xl font-medium tracking-tight", className)}>
      {title}
    </h1>
  );
}
