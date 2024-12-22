import React from "react";
import PricingTable from "./_components/PricingTable";
import MobilePricingTable from "./_components/MobilePricingTable";
import prisma from "@/prisma";

const Price = async () => {
  const packages = await prisma.package.findMany({
    where: {
      status: "Active",
    },
  });

  return (
    <div className="w-full  md:px-32 min-h-[500px] py-6">
      <div className="md:p-4 p-6 flex flex-col justify-center ">
        <h1 className="text-4xl text-center font-bold font-ador">
          আমার দোকান - প্রাইসিং প্ল্যান
        </h1>
        <p className="text-lg text-center mt-4">
          আমার দোকান আপনাকে আপনার ব্যবসার জন্য সবচেয়ে উপযুক্ত প্ল্যান বেছে
          নেওয়ার সুযোগ দেয়।
          <br /> আমাদের প্রাইসিং প্ল্যান ডিজাইন করা হয়েছে আপনার ব্যবসার আকার
          এবং প্রয়োজন অনুযায়ী।
        </p>
      </div>
      <div className="hidden md:block">
        <PricingTable plans={packages} />
      </div>
      <div className="md:hidden block">
        <MobilePricingTable plans={packages} />
      </div>
    </div>
  );
};

export default Price;

// const plans = [
//   {
//     name: "Startup (Free)",
//     description: "Free Forever",
//     price: "Free",
//     features: {
//       Store: 1,
//       Warehouse: 1,
//       Users: 2,
//       Backup: false,
//       SMS_Service: false,
//       Reports: false,
//       Custom_Branding: true,
//       Sales_Management: true,
//       Inventory_Management: true,
//       Products: "100 products",
//       Customer_Support: false,
//       Store_Management: "Unlimited",
//       Product_Management: "Unlimited",
//       Customer_Records: "Unlimited",
//       Sales_Tracking: "Unlimited",
//       Barcode_Printing: false,
//       Discount_Management: true,
//       Product_Stock_Alerts: true,
//       Invoice_Receipt_Printing: true,
//       Daily_Sales_Summary: true,
//       Excel_PDF_Reports_Export: false,
//       Role_Based_Access_Control: true,
//       Supplier_Management: true,
//       Real_Time_Stock_Synchronization: true,
//       Promotions: true,
//       Dynamic_Tax_Settings: true,
//       Purchase_Return_Loss_Management: true,
//       Mobile_App_Access: true,
//       Self_Hosting: false,
//     },
//     button: "Get started",
//     color: "bg-primary/30",
//   },
//   {
//     name: "Basic plan",
//     description: "Our most popular plan.",
//     price: "1000৳",
//     features: {
//       Store: 2,
//       Warehouse: 2,
//       Users: 3,
//       Backup: "Monthly",
//       SMS_Service: true,
//       Reports: true,
//       Custom_Branding: true,
//       Sales_Management: true,
//       Inventory_Management: true,
//       Products: "500 products",
//       Customer_Support: "Email Support",
//       Store_Management: "Unlimited",
//       Product_Management: "Unlimited",
//       Customer_Records: "Unlimited",
//       Sales_Tracking: "Unlimited",
//       Barcode_Printing: true,
//       Discount_Management: true,
//       Product_Stock_Alerts: true,
//       Invoice_Receipt_Printing: true,
//       Daily_Sales_Summary: true,
//       Excel_PDF_Reports_Export: true,
//       Role_Based_Access_Control: true,
//       Supplier_Management: true,
//       Real_Time_Stock_Synchronization: true,
//       Promotions: true,
//       Dynamic_Tax_Settings: true,
//       Purchase_Return_Loss_Management: true,
//       Mobile_App_Access: true,
//       Self_Hosting: false,
//     },
//     button: "Get started",
//     color: "bg-primary",
//   },
//   {
//     name: "Premium Plan",
//     description: "Best for growing businesses.",
//     price: "5000৳",
//     features: {
//       Store: 4,
//       Warehouse: 4,
//       Users: 5,
//       Backup: "Weekly",
//       SMS_Service: true,
//       Reports: true,
//       Custom_Branding: true,
//       Sales_Management: true,
//       Inventory_Management: true,
//       Products: "Unlimited",
//       Customer_Support: "24/7 Support",
//       Store_Management: "Unlimited",
//       Product_Management: "Unlimited",
//       Customer_Records: "Unlimited",
//       Sales_Tracking: "Unlimited",
//       Barcode_Printing: true,
//       Discount_Management: true,
//       Product_Stock_Alerts: true,
//       Invoice_Receipt_Printing: true,
//       Daily_Sales_Summary: true,
//       Excel_PDF_Reports_Export: true,
//       Role_Based_Access_Control: true,
//       Supplier_Management: true,
//       Real_Time_Stock_Synchronization: true,
//       Promotions: true,
//       Dynamic_Tax_Settings: true,
//       Purchase_Return_Loss_Management: true,
//       Mobile_App_Access: true,
//       Self_Hosting: false,
//     },
//     button: "Get started",
//     color: "bg-yellow-100",
//   },
//   {
//     name: "Enterprise Plan",
//     description: "For large teams ",
//     price: "Custom",
//     features: {
//       Store: "Unlimited",
//       Warehouse: "Unlimited",
//       Users: "Unlimited",
//       Backup: "Unlimited",
//       SMS_Service: "Unlimited",
//       Reports: "Unlimited",
//       Custom_Branding: true,
//       Sales_Management: true,
//       Inventory_Management: true,
//       Products: "Unlimited",
//       Customer_Support: "Unlimited",
//       Store_Management: "Unlimited",
//       Product_Management: "Unlimited",
//       Customer_Records: "Unlimited",
//       Sales_Tracking: "Unlimited",
//       Barcode_Printing: "Unlimited",
//       Discount_Management: true,
//       Product_Stock_Alerts: true,
//       Invoice_Receipt_Printing: true,
//       Daily_Sales_Summary: true,
//       Excel_PDF_Reports_Export: true,
//       Role_Based_Access_Control: true,
//       Supplier_Management: true,
//       Real_Time_Stock_Synchronization: true,
//       Promotions: true,
//       Dynamic_Tax_Settings: true,
//       Purchase_Return_Loss_Management: true,
//       Mobile_App_Access: true,
//       Self_Hosting: true,
//     },
//     button: "Contact Us",
//     color: "bg-blue-100",
//   },
// ];
