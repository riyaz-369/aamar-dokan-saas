"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertCircle, Repeat } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentFailedPage = () => {
  const router = useRouter();
  const [retrying, setRetrying] = useState(false);

  const handleRetryPayment = () => {
    setRetrying(true);
    setTimeout(() => {
      setRetrying(false);
      router.push("/client/payment"); // Navigate to the checkout page
    }, 1000);
  };

  const handleViewDashboard = () => {
    router.push("/client");
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className="max-w-md w-full px-8 py-12 text-center flex flex-col items-center gap-6">
        <AlertCircle className="text-red-500 h-16 w-16 animate-bounce" />
        <div>
          <h1 className="text-3xl font-bold mb-2">Payment Failed</h1>
          <p className="mb-4">
            Unfortunately, your payment could not be processed. Please try
            again.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            onClick={handleViewDashboard}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Dashboard</span>
          </Button>
          <Button onClick={handleRetryPayment} disabled={retrying}>
            {retrying ? (
              <span>Retrying...</span>
            ) : (
              <div className="flex items-center space-x-2">
                <Repeat className="h-4 w-4" />
                <span>Retry Payment</span>
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailedPage;
