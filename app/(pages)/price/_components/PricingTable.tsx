import { Button } from "@/components/ui/button";
import { Check, CheckCircle, CheckCircle2, Minus } from "lucide-react";
import Link from "next/link";

const plansB = [
  {
    name: "স্টার্টআপ (ফ্রি)",
    description: "Free Forever",
    price: "Free",
    features: {
      Store: "1",
      Warehouse: "1",
      Users: "2",
      Backup: "❌",
      SMS_Service: "❌",
      Report: "❌",
      Custom_Branding: "✅",
      Sales_Management: "✅",
      Inventory_Management: "✅",
      Product_Count: "100 পণ্য",
      Customer_Support: "❌",
      Store_Management: "♾️ আনলিমিটেড",
      Product_Management: "♾️ আনলিমিটেড",
      Customer_Records: "♾️ আনলিমিটেড",
      Sales_Tracking: "♾️ আনলিমিটেড",
      Barcode_Printing: "❌",
      Discount_Management: "✅",
      Product_Stock_Alerts: "✅",
      Invoice_Printing: "✅",
      Daily_Sales_Summary: "✅",
      Excel_PDF_Export: "❌",
      Role_Based_Access_Control: "✅",
      Supplier_Management: "✅",
      Real_Time_Stock_Sync: "✅",
      Promotions: "✅",
      Dynamic_Tax_Settings: "✅",
      Purchase_Return_Loss_Management: "✅",
      Mobile_App_Access: "✅",
      Self_Hosting: "❌",
    },
    button: "Get started",
    color: "bg-primary/30",
  },
  {
    name: "বেসিক প্ল্যান (১০০০৳/মাস)",
    description: "Our most popular plan.",
    price: "1000৳",
    features: {
      Store: "2",
      Warehouse: "2",
      Users: "3",
      Backup: "Monthly",
      SMS_Service: "✅",
      Report: "✅",
      Custom_Branding: "✅",
      Sales_Management: "✅",
      Inventory_Management: "✅",
      Product_Count: "500 পণ্য",
      Customer_Support: "Email Support",
      Store_Management: "♾️ আনলিমিটেড",
      Product_Management: "♾️ আনলিমিটেড",
      Customer_Records: "♾️ আনলিমিটেড",
      Sales_Tracking: "♾️ আনলিমিটেড",
      Barcode_Printing: "✅",
      Discount_Management: "✅",
      Product_Stock_Alerts: "✅",
      Invoice_Printing: "✅",
      Daily_Sales_Summary: "✅",
      Excel_PDF_Export: "✅",
      Role_Based_Access_Control: "✅",
      Supplier_Management: "✅",
      Real_Time_Stock_Sync: "✅",
      Promotions: "✅",
      Dynamic_Tax_Settings: "✅",
      Purchase_Return_Loss_Management: "✅",
      Mobile_App_Access: "✅",
      Self_Hosting: "❌",
    },
    button: "Get started",
    color: "bg-primary",
  },
  {
    name: "প্রিমিয়াম (৫০০০৳/মাস)",
    description: "Best for growing teams.",
    price: "5000৳",
    features: {
      Store: "4",
      Warehouse: "4",
      Users: "5",
      Backup: "Weekly",
      SMS_Service: "✅",
      Report: "✅",
      Custom_Branding: "✅",
      Sales_Management: "✅",
      Inventory_Management: "✅",
      Product_Count: "Unlimited",
      Customer_Support: "24/7 Support",
      Store_Management: "♾️ আনলিমিটেড",
      Product_Management: "♾️ আনলিমিটেড",
      Customer_Records: "♾️ আনলিমিটেড",
      Sales_Tracking: "♾️ আনলিমিটেড",
      Barcode_Printing: "✅",
      Discount_Management: "✅",
      Product_Stock_Alerts: "✅",
      Invoice_Printing: "✅",
      Daily_Sales_Summary: "✅",
      Excel_PDF_Export: "✅",
      Role_Based_Access_Control: "✅",
      Supplier_Management: "✅",
      Real_Time_Stock_Sync: "✅",
      Promotions: "✅",
      Dynamic_Tax_Settings: "✅",
      Purchase_Return_Loss_Management: "✅",
      Mobile_App_Access: "✅",
      Self_Hosting: "❌",
    },
    button: "Get started",
    color: "bg-yellow-100",
  },
  {
    name: "এন্টারপ্রাইজ (কাস্টম প্রাইসিং)",
    description: "Best for large teams.",
    price: "Custom Pricing",
    features: {
      Store: "♾️ আনলিমিটেড",
      Warehouse: "♾️ আনলিমিটেড",
      Users: "♾️ আনলিমিটেড",
      Backup: "♾️ আনলিমিটেড",
      SMS_Service: "♾️ আনলিমিটেড",
      Report: "♾️ আনলিমিটেড",
      Custom_Branding: "♾️ আনলিমিটেড",
      Sales_Management: "♾️ আনলিমিটেড",
      Inventory_Management: "♾️ আনলিমিটেড",
      Product_Count: "♾️ আনলিমিটেড",
      Customer_Support: "♾️ আনলিমিটেড",
      Store_Management: "♾️ আনলিমিটেড",
      Product_Management: "♾️ আনলিমিটেড",
      Customer_Records: "♾️ আনলিমিটেড",
      Sales_Tracking: "♾️ আনলিমিটেড",
      Barcode_Printing: "♾️ আনলিমিটেড",
      Discount_Management: "♾️ আনলিমিটেড",
      Product_Stock_Alerts: "♾️ আনলিমিটেড",
      Invoice_Printing: "♾️ আনলিমিটেড",
      Daily_Sales_Summary: "♾️ আনলিমিটেড",
      Excel_PDF_Export: "♾️ আনলিমিটেড",
      Role_Based_Access_Control: "♾️ আনলিমিটেড",
      Supplier_Management: "♾️ আনলিমিটেড",
      Real_Time_Stock_Sync: "♾️ আনলিমিটেড",
      Promotions: "♾️ আনলিমিটেড",
      Dynamic_Tax_Settings: "♾️ আনলিমিটেড",
      Purchase_Return_Loss_Management: "♾️ আনলিমিটেড",
      Mobile_App_Access: "♾️ আনলিমিটেড",
      Self_Hosting: "♾️ আনলিমিটেড",
    },
    button: "Get started",
    color: "bg-blue-100",
  },
];

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
    button: "Get started",
    color: "bg-blue-100",
  },
];

const PricingTable = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Features Comparison Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border-none border-gray-200">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left border-b" />
              {plans.map((plan, index) => (
                <th key={index} className="pb-4 border-b text-center">
                  <div
                    key={index}
                    className={`w-52 rounded-lg py-4 px-2 shadow-md ${plan.color}`}
                  >
                    <h3 className="text-xl font-semibold text-center">
                      {plan.name.replace("_", " ")}
                    </h3>
                    <p className="text-sm text-gray-700 font-light text-center mb-4">
                      {plan.description}
                    </p>
                    <p className="text-4xl font-bold text-center mb-6">
                      {plan.price}
                    </p>
                    <Link href="/client/payment">
                      <Button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                        {plan.button}
                      </Button>
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(plans[0].features).map((feature, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2 text-left text-sm">
                  {feature.replaceAll("_", " ")}
                </td>
                {plans.map((plan, index) => (
                  <td key={index} className="px-4 py-1 text-center text-sm">
                    {typeof plan.features[feature] === "boolean" ? (
                      plan.features[feature] ? (
                        <CheckCircle2 className="text-green-500 inline-block" />
                      ) : (
                        <Minus className="text-gray-400 inline-block" />
                      )
                    ) : (
                      plan.features[feature]
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t">
              <td className="px-4 py-2 text-left text-sm" />
              <td className="px-4 py-2 text-center text-sm">
                <Button className="w-full">Get Start</Button>
              </td>
              <td className="px-4 py-2 text-center text-sm">
                <Button className="w-full">Get Start</Button>
              </td>
              <td className="px-4 py-2 text-center text-sm">
                <Button className="w-full">Get Start</Button>
              </td>
              <td className="px-4 py-2 text-center text-sm">
                <Button className="w-full">Contact Us</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
