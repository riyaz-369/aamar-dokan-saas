"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const SubscriptionChart = ({
  data,
  chartConfig,
}: {
  data: any;
  chartConfig: any;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        <ChartContainer config={chartConfig} className="w-full h-[100px]">
          <BarChart data={data}>
            <Bar
              dataKey="subscription"
              fill="var(--color-subscription)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SubscriptionChart;
