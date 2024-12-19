import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
const plans = [
  {
    name: "Startup (Free)",
    description: "Free Forever",
    price: "Free",
    features: {
      Store: 1,
      Warehouse: 1,
      Users: 2,
      Backup: false,
      SMS_Service: false,
      Reports: false,
      Custom_Branding: true,
      Sales_Management: true,
      Inventory_Management: true,
      Products: "100 products",
      Customer_Support: false,
      Store_Management: "Unlimited",
      Product_Management: "Unlimited",
      Customer_Records: "Unlimited",
      Sales_Tracking: "Unlimited",
      Barcode_Printing: false,
      Discount_Management: true,
      Product_Stock_Alerts: true,
      Invoice_Receipt_Printing: true,
      Daily_Sales_Summary: true,
      Excel_PDF_Reports_Export: false,
      Role_Based_Access_Control: true,
      Supplier_Management: true,
      Real_Time_Stock_Synchronization: true,
      Promotions: true,
      Dynamic_Tax_Settings: true,
      Purchase_Return_Loss_Management: true,
      Mobile_App_Access: true,
      Self_Hosting: false,
    },
    button: "Get started",
    color: "bg-primary/30",
  },
  {
    name: "Basic plan",
    description: "Our most popular plan.",
    price: "1000৳",
    features: {
      Store: 2,
      Warehouse: 2,
      Users: 3,
      Backup: "Monthly",
      SMS_Service: true,
      Reports: true,
      Custom_Branding: true,
      Sales_Management: true,
      Inventory_Management: true,
      Products: "500 products",
      Customer_Support: "Email Support",
      Store_Management: "Unlimited",
      Product_Management: "Unlimited",
      Customer_Records: "Unlimited",
      Sales_Tracking: "Unlimited",
      Barcode_Printing: true,
      Discount_Management: true,
      Product_Stock_Alerts: true,
      Invoice_Receipt_Printing: true,
      Daily_Sales_Summary: true,
      Excel_PDF_Reports_Export: true,
      Role_Based_Access_Control: true,
      Supplier_Management: true,
      Real_Time_Stock_Synchronization: true,
      Promotions: true,
      Dynamic_Tax_Settings: true,
      Purchase_Return_Loss_Management: true,
      Mobile_App_Access: true,
      Self_Hosting: false,
    },
    button: "Get started",
    color: "bg-primary",
  },
  {
    name: "Premium Plan",
    description: "Best for growing businesses.",
    price: "5000৳",
    features: {
      Store: 4,
      Warehouse: 4,
      Users: 5,
      Backup: "Weekly",
      SMS_Service: true,
      Reports: true,
      Custom_Branding: true,
      Sales_Management: true,
      Inventory_Management: true,
      Products: "Unlimited",
      Customer_Support: "24/7 Support",
      Store_Management: "Unlimited",
      Product_Management: "Unlimited",
      Customer_Records: "Unlimited",
      Sales_Tracking: "Unlimited",
      Barcode_Printing: true,
      Discount_Management: true,
      Product_Stock_Alerts: true,
      Invoice_Receipt_Printing: true,
      Daily_Sales_Summary: true,
      Excel_PDF_Reports_Export: true,
      Role_Based_Access_Control: true,
      Supplier_Management: true,
      Real_Time_Stock_Synchronization: true,
      Promotions: true,
      Dynamic_Tax_Settings: true,
      Purchase_Return_Loss_Management: true,
      Mobile_App_Access: true,
      Self_Hosting: false,
    },
    button: "Get started",
    color: "bg-yellow-100",
  },
  {
    name: "Enterprise Plan",
    description: "For large teams ",
    price: "Custom",
    features: {
      Store: "Unlimited",
      Warehouse: "Unlimited",
      Users: "Unlimited",
      Backup: "Unlimited",
      SMS_Service: "Unlimited",
      Reports: "Unlimited",
      Custom_Branding: true,
      Sales_Management: true,
      Inventory_Management: true,
      Products: "Unlimited",
      Customer_Support: "Unlimited",
      Store_Management: "Unlimited",
      Product_Management: "Unlimited",
      Customer_Records: "Unlimited",
      Sales_Tracking: "Unlimited",
      Barcode_Printing: "Unlimited",
      Discount_Management: true,
      Product_Stock_Alerts: true,
      Invoice_Receipt_Printing: true,
      Daily_Sales_Summary: true,
      Excel_PDF_Reports_Export: true,
      Role_Based_Access_Control: true,
      Supplier_Management: true,
      Real_Time_Stock_Synchronization: true,
      Promotions: true,
      Dynamic_Tax_Settings: true,
      Purchase_Return_Loss_Management: true,
      Mobile_App_Access: true,
      Self_Hosting: true,
    },
    button: "Contact Us",
    color: "bg-blue-100",
  },
];
const MobilePricingTable = () => {
  return (
    <div className="p-8 space-y-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`w-full rounded-lg py-6 px-6 shadow-md ${plan.color}`}
        >
          <h3 className="text-xl font-semibold text-left">
            {plan.name.replace("_", " ")}
          </h3>
          <p className="text-sm text-gray-700 font-light text-left mb-6">
            {plan.description}
          </p>
          <p className="text-4xl font-bold text-left mb-4">{plan.price}</p>
          <div className="mb-6">
            {Object.entries(plan.features).map(([key, value], index) => (
              <div key={index} className="flex items-center mb-2">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                <span>
                  {key}: {value}
                </span>
              </div>
            ))}
          </div>
          <Link href="/client/cart">
            <Button
              size="lg"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              {plan.button}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobilePricingTable;
