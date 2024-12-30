import Image from "next/image";
import React from "react";

const ReportingAndAnalytics = () => {
  return (
    <section
      id="reporting-analytics"
      className="flex flex-col lg:flex-row items-center justify-center gap-8 py-8 px-4 lg:gap-12 lg:px-12"
    >
      <Image
        className="rounded w-full max-w-md lg:max-w-none"
        src="/analytic.jpg"
        alt="Point of Sale System"
        height={800}
        width={800}
        priority
      />
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="font-ador text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          রিপোর্টিং এবং বিশ্লেষণ (Reporting & Analytics)
        </h2>
        <h3 className="font-ador text-base md:text-lg font-medium">
          বিক্রি, লাভ-ক্ষতি এবং অন্যান্য রিপোর্টিংয়ের জন্য অ্যানালিটিক্স টুল।
        </h3>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          রিপোর্টিং এবং বিশ্লেষণ ফিচারটি আপনাকে আপনার ব্যবসার সব তথ্যের উপর
          ভিত্তি করে বিস্তারিত রিপোর্ট তৈরি করতে এবং সেগুলোর গভীর বিশ্লেষণ করতে
          সাহায্য করে। এটি আপনাকে বিক্রয়, ক্রয়, স্টক এবং অন্যান্য কার্যক্রমের
          প্রবণতা বুঝতে সহায়তা করে।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          আপনি সহজেই বিভিন্ন ধরনের কাস্টম রিপোর্ট তৈরি করতে পারবেন এবং বিভিন্ন
          দৃষ্টিকোণ থেকে তথ্য বিশ্লেষণ করতে পারবেন, যা ব্যবসার সিদ্ধান্ত নেওয়ার
          ক্ষেত্রে সহায়ক হবে।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          এই ফিচারটি আপনার ব্যবসার পারফরম্যান্স ট্র্যাক করতে এবং ভবিষ্যৎ
          পরিকল্পনা সাজাতে গুরুত্বপূর্ণ তথ্য প্রদান করে, ফলে আপনার ব্যবসা আরও
          দক্ষ এবং লাভজনক হবে।
        </p>
      </div>
    </section>
  );
};

export default ReportingAndAnalytics;
