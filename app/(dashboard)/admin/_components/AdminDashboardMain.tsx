import React from "react";

import { ChartConfig } from "@/components/ui/chart";
import { RevenueChart } from "../../_components/revenue-chart";
import SubscriptionChart from "../../_components/subscription-chart";
import { PaidUsers } from "../../_components/paid-users";
import { RecentSales } from "./recent-sales";
import { PaymentHistory } from "./payment-history";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#ff6a39",
  },
  subscription: {
    label: "Subscriptions",
    color: "#ff6a39",
  },
} satisfies ChartConfig;

const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
  {
    revenue: 26475,
    subscription: 189,
  },
];

const AdminDashboardMain = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid auto-rows-min gap-4 lg:grid-cols-3">
        <RevenueChart data={data} chartConfig={chartConfig} />
        <SubscriptionChart data={data} chartConfig={chartConfig} />
        <PaidUsers data={data} chartConfig={chartConfig} />
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <RecentSales />
        <PaymentHistory />
      </div>
    </div>
  );
};

export default AdminDashboardMain;
