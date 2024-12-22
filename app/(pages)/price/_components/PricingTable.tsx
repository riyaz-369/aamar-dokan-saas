"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Minus } from "lucide-react";
import Link from "next/link";

const PricingTable = ({ plans }) => {
  // console.log("Packages:", plans, typeof plans);

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
                  <th key={index} className="pb-4 border-b text-center">
                    <div className={`w-56 rounded-lg py-4 px-4 shadow-md`}>
                      <h3 className="text-xl font-semibold text-center">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-gray-700 font-light text-center mb-6">
                        {plan.subtitle}
                      </p>
                      <p className="text-4xl font-bold text-center mb-4 mt-4">
                        {plan.custom
                          ? "Contact"
                          : plan?.price?.monthly === 0 ||
                            plan.price.yearly === 0
                          ? "Free"
                          : plan.price.monthly + "/mo"}
                      </p>
                      <Link href="/client/cart">
                        <Button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                          Get Start
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
                  <Link href="/client/cart">
                    <Button className="w-full">Get Started</Button>
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
