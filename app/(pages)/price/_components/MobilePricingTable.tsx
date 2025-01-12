"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/_redux-store/slice/orderSlice";
import { useSession } from "next-auth/react";

type FeatureType = {
  title: string;
  value: string;
};

type PlanType = {
  id: string;
  title: string;
  subtitle: string;
  price: { monthly: number; yearly: number; custom: boolean };
  features: FeatureType[];
  custom: boolean;
  code: string;
  serviceId: string;
  color: string;
};

type MobilePricingTableProps = {
  plans: PlanType[];
};

const MobilePricingTable: React.FC<MobilePricingTableProps> = ({ plans }) => {
  const dispatch = useDispatch();

  const { data: session } = useSession();

  const user = session?.user as {
    id: string;
    phone: string;
    aamardokanId: string;
  } | null;

  const handleByPackage = async (
    packageId: string,
    serviceId: string,
    price: number
  ) => {
    if (user)
      dispatch(
        addToCart({
          packageId,
          serviceId,
          amount: price,
          aamardokanId: user.aamardokanId,
          clientId: user.id,
        })
      );
  };

  return (
    <div className="space-y-6">
      {plans.map((plan) => (
        <div key={plan.id} className="w-full rounded-lg py-6 px-6 shadow-md">
          <h3 className="text-xl font-semibold text-left">{plan.title}</h3>

          <p className="text-sm text-gray-700 font-light text-left mb-6">
            {plan.subtitle}
          </p>

          <p className="text-4xl font-bold text-left mb-4">
            {plan.custom
              ? "Contact"
              : plan.price.yearly === 0
              ? "Free"
              : `Monthly: ${plan.price.monthly} / month`}
          </p>
          <p className="text-lg text-gray-600 text-left mb-6">
            {plan.custom
              ? "Contact"
              : plan.price.yearly === 0
              ? "Free"
              : `Yearly: ${plan.price.yearly} / month`}
          </p>

          <div className="mb-6">
            {plan.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center mb-2 justify-between"
              >
                <p className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span>{feature.title}</span>
                </p>
                <span>{feature.value !== "Yes" && feature.value}</span>
              </div>
            ))}
          </div>

          <Link href={plan.custom ? "/contact" : "/client/cart"}>
            <Button
              onClick={() =>
                handleByPackage(plan.id, plan.serviceId, plan.price.monthly)
              }
              size="lg"
              className="w-full text-gray-950 py-2 rounded-md"
              style={{ backgroundColor: plan.color }}
            >
              {plan.custom ? "Contact" : "Get Started"}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobilePricingTable;
