import Image from "next/image";
import React from "react";

const MobileReportingApp = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-center gap-12 py-8 px-12">
      <Image
        className="rounded"
        src="/mobile-app.png"
        alt="Point of Sale System"
        height={800}
        width={800}
      />
      <div className="w-1/3">
        <h2 className="font-ador text-4xl font-bold mb-4">
          মোবাইল অ্যাপ (Mobile Reporting App)
        </h2>
        <h3 className="font-ador text-lg font-medium">
          মোবাইল থেকে ব্যবসার রিপোর্ট দেখুন এবং আপডেট পান।
        </h3>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          মোবাইল অ্যাপ ফিচারটি আপনাকে যেকোনো জায়গা থেকে আপনার ব্যবসার রিপোর্ট ও
          কার্যক্রম সহজেই ট্র্যাক করতে সহায়তা করে। এটি আপনার মোবাইলে সরাসরি
          রিপোর্ট দেখতে এবং বিশ্লেষণ করতে দেয়, যাতে আপনি যেকোনো সময়ে, যেখানেই
          থাকুন না কেন, ব্যবসার পরিস্থিতি বুঝতে পারেন।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          এই অ্যাপের মাধ্যমে আপনি গুরুত্বপূর্ণ ডাটা এবং পরিসংখ্যান মোবাইল থেকেই
          তাত্ক্ষণিকভাবে যাচাই করতে পারবেন, ফলে আপনার সিদ্ধান্ত নেওয়ার প্রক্রিয়া
          আরও দ্রুত এবং কার্যকর হবে।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          মোবাইল অ্যাপ ফিচারটি আপনার ব্যবসার তথ্য নিয়ন্ত্রণকে আরও সহজ, সুবিধাজনক
          এবং অভিগমনযোগ্য করে তোলে, যাতে আপনি সব সময় আপ-টু-ডেট থাকেন।
        </p>
      </div>
    </section>
  );
};

export default MobileReportingApp;
