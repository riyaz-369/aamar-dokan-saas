"use client";

import { addToCart } from "@/app/_redux-store/slice/cartSlice";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Minus } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";

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
};

type PricingTableProps = {
  plans: PlanType[];
};

const PricingTable: React.FC<PricingTableProps> = ({ plans }) => {
  // console.log("Packages:", plans);
  const dispatch = useDispatch();

  const handleByPackage = async (packageCode: string, serviceId: string) => {
    dispatch(addToCart({ packageCode, serviceId }));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Features Comparison Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border-none border-gray-200">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left border-b">Features</th>
              {plans.length > 0 ? (
                plans?.map((plan, index) => (
                  <th key={index} className="pb-4 border-b text-left">
                    <div
                      className={cn(
                        "w-56 rounded-lg py-4 px-4 shadow-md border border-primary"
                      )}
                    >
                      <h3 className="text-xl font-semibold text-left">
                        {plan.title}
                      </h3>
                      <p className="text-sm font-normal text-gray-800 text-left mb-6">
                        {plan.subtitle}
                      </p>
                      <p className="text-4xl font-bold text-left mb-4 mt-4">
                        {plan.custom === true
                          ? "Custom"
                          : plan?.price?.monthly === 0 ||
                            plan.price.yearly === 0
                          ? "Free"
                          : plan.price.monthly + "/mo"}
                      </p>
                      <Link
                        href={
                          plan.custom
                            ? "https://techsoulbd.com/contact"
                            : "/client/cart"
                        }
                      >
                        <Button
                          onClick={() =>
                            handleByPackage(plan.code, plan.serviceId)
                          }
                          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                        >
                          {plan.custom ? "Contact Us" : "Get Started"}
                        </Button>
                      </Link>
                    </div>
                  </th>
                ))
              ) : (
                <div className="text-center text-gray-700 font-medium">
                  No plans found.
                </div>
              )}
            </tr>
          </thead>
          <tbody>
            {plans[0]?.features?.map((feature, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2 text-left text-sm">{feature.title}</td>
                {plans.map((plan, index) => {
                  const planFeature = plan.features.find(
                    (f) => f.title === feature.title
                  );
                  return (
                    <td key={index} className="px-4 py-2 text-center text-sm">
                      {planFeature?.value ? (
                        planFeature.value !== "Yes" && planFeature.value
                      ) : (
                        <Minus className="text-gray-400 inline-block" />
                      )}
                      {planFeature?.value === "Yes" && (
                        <CheckCircle2 className="text-green-500 inline-block" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className="border-t">
              <td className="px-4 py-2 text-left text-sm" />
              {plans?.map((plan, index) => (
                <td key={index} className="px-4 py-2 text-center text-sm">
                  <Link
                    href={
                      plan.custom
                        ? "https://techsoulbd.com/contact"
                        : "/client/cart"
                    }
                  >
                    <Button
                      onClick={() => handleByPackage(plan.code, plan.serviceId)}
                      className="w-full"
                    >
                      {" "}
                      {plan.custom ? "Contact Us" : "Get Started"}
                    </Button>
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
