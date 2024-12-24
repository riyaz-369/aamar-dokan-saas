"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, CheckCircle, Copy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Confetti from "react-confetti";

const PaymentSuccessPage = () => {
  const router = useRouter();
  const [copySuccess, setCopySuccess] = useState(false);

  const transactionId = "AAD03212399999";

  const handleViewService = () => {
    router.push("/client/my-services");
  };

  const handleViewDashboard = () => {
    router.push("/client");
  };

  const handleCopyTransactionId = () => {
    navigator.clipboard.writeText(transactionId).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <Confetti
        recycle={true}
        numberOfPieces={300}
        className="pointer-events-none"
        drawShape={(ctx) => {
          ctx.beginPath();
          for (let i = 0; i < 20; i++) {
            const angle = 0.35 * i;
            const x = (0.2 + 1.5 * angle) * Math.cos(angle);
            const y = (0.2 + 1.5 * angle) * Math.sin(angle);
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.closePath();
        }}
      />
      <div className="max-w-md w-full px-8 py-12 text-center flex flex-col items-center gap-6">
        <CheckCircle className="text-primary h-16 w-16 animate-bounce" />
        <div>
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className=" mb-4">
            Thank you for your payment. Your transaction ID is:
          </p>
          <div className="bg-primary/5 text-primary p-3 rounded-md font-mono text-sm mb-6 flex items-center justify-center">
            <span>{transactionId}</span>
            <button
              onClick={handleCopyTransactionId}
              className="ml-3 text-primary"
            >
              {copySuccess ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
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
          <Button onClick={handleViewService}>View Service</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
