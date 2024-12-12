"use client";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BellRing, Check } from "lucide-react";
import React from "react";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 100, mobile: 80 },
  { month: "February", desktop: 150, mobile: 200 },
  { month: "March", desktop: 80, mobile: 120 },
  { month: "April", desktop: 90, mobile: 190 },
  { month: "May", desktop: 120, mobile: 130 },
  { month: "June", desktop: 100, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const RevenueChart = () => {
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader className="pb-0">
        {/*  <p className="text-sm  text-muted-foreground m-0">Total Revenue</p>
        <CardTitle className="text-xl">$15,231.89</CardTitle>
        <CardDescription>+20.1% from last month</CardDescription> */}
      </CardHeader>
      <CardContent className="">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 5,
              right: 5,
            }}
          >
            {/* <CartesianGrid vertical={false} /> */}
            {/* <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
            {/* <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            /> */}
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={
                {
                  // fill: "var(--color-desktop)",
                }
              }
              activeDot={
                {
                  // r: 6,
                }
              }
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default RevenueChart;
