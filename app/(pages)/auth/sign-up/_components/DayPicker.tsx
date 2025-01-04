/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Calendar } from "./Calander";

export function DatePicker({ field }: any) {
  // console.log("field from date picker:", field);
  const [date, setDate] = useState<Date>(field.value);
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <Popover key={date?.getTime()}>
      <div className="relative w-[280px]">
        <Input value={format(date, "PPP")} />
        {errorMessage && (
          <div className="absolute bottom-[-1.75rem] left-0 text-red-400 text-sm">
            {errorMessage}
          </div>
        )}
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "font-normal absolute right-0 translate-y-[-50%] top-[50%] rounded-l-none",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="w-4 h-4" />
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent align="end" className="w-auto px-4 py-2">
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          selected={date}
          defaultMonth={date}
          onSelect={(selectedDate) => {
            if (!selectedDate) return;
            setDate(selectedDate);
            setErrorMessage("");
          }}
          fromYear={1960}
          toYear={new Date().getFullYear()}
        />
      </PopoverContent>
    </Popover>
  );
}
