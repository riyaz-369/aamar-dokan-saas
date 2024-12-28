import Image from "next/image";
import React from "react";

const StockManagement = () => {
  return (
    <section className="flex items-center justify-center gap-12 py-8 px-12">
      <Image
        className="rounded"
        src="/Stock Management.jpg"
        alt="Point of Sale System"
        height={800}
        width={800}
      />
      <div className="w-1/3">
        <h2 className="font-ador text-4xl font-bold mb-4">
          স্টক ব্যবস্থাপনা (Stock Management)
        </h2>
        <h3 className="font-ador text-lg font-medium">
          ইনভেন্টরি আপডেট ও স্বয়ংক্রিয় স্টক রিপোর্ট তৈরি করুন।
        </h3>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          স্টক ব্যবস্থাপনা ফিচারটি আপনার গুদামে থাকা সমস্ত পণ্যের পরিমাণ ও
          অবস্থান সহজে ট্র্যাক করতে সাহায্য করে। এটি আপনাকে স্টকের অবস্থা
          নিয়মিতভাবে পর্যবেক্ষণ করতে এবং প্রয়োজন অনুযায়ী স্টক পুনরায় অর্ডার করতে
          সহায়তা করে।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          এটি ইনভেন্টরি নিয়ন্ত্রণে সাহায্য করে, যাতে পণ্যের অভাব বা অতিরিক্ত
          মজুদ না হয়। স্টক ব্যবস্থাপনা ফিচারটি আপনার ব্যবসার কার্যক্রমকে আরও
          সংগঠিত ও কার্যকরী করে তোলে, সময় বাঁচায় এবং খরচ কমায়।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          এই ফিচারটি আপনার স্টক ব্যবস্থাপনাকে সহজ, দ্রুত এবং ঝামেলামুক্ত করে
          তোলে, যাতে আপনি সবসময় সঠিক পরিমাণ স্টক নিয়ে ব্যবসা পরিচালনা করতে
          পারেন।
        </p>
      </div>
    </section>
  );
};

export default StockManagement;
