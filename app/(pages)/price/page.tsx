import React from "react";
import PricingTable from "./_components/PricingTable";

const Price = () => {
  return (
    <div className="w-full  px-32 min-h-[500px] py-6">
      <div className="p-4 flex flex-col justify-center ">
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
      <div>
        <PricingTable />
      </div>
    </div>
  );
};

export default Price;
