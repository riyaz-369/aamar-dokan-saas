"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Line, LineChart } from "recharts";

export function PaidUsers({
  data,
  chartConfig,
}: {
  data: any;
  chartConfig: any;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Paid Users</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="text-2xl font-bold">$15,231.89</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        <ChartContainer config={chartConfig} className="w-full">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="revenue"
              stroke="var(--color-revenue)"
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
