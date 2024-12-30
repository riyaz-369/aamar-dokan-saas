import Image from "next/image";
import React from "react";

const DataBackup = () => {
  return (
    <section
      id="data-backup"
      className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 py-8 px-4 lg:gap-12 lg:px-12"
    >
      <Image
        className="rounded w-full max-w-md lg:max-w-none"
        src="/data-backup.png"
        alt="Point of Sale System"
        height={800}
        width={800}
        priority
      />
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="font-ador text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          ব্যাকআপ সুবিধা (Data Backup)
        </h2>
        <h3 className="font-ador text-base md:text-lg font-medium">
          আপনার গুরুত্বপূর্ণ ডেটা নিরাপদ রাখতে স্বয়ংক্রিয় ব্যাকআপ সিস্টেম।
        </h3>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          ব্যাকআপ সুবিধা ফিচারটি আপনার ব্যবসার গুরুত্বপূর্ণ তথ্যের সুরক্ষা
          নিশ্চিত করে। এটি আপনার সমস্ত ডাটা নিয়মিতভাবে নিরাপদ স্থানে সেভ করে
          রাখে, যাতে কোনো ধরনের তথ্য হারানোর পরিস্থিতি এড়ানো যায়।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          যেকোনো অপ্রত্যাশিত সমস্যা বা সিস্টেম ফেইলের কারণে আপনার ডাটা হারালে,
          আপনি সহজেই ব্যাকআপ থেকে তথ্য পুনরুদ্ধার করতে পারবেন। এটি আপনার ব্যবসার
          নিরাপত্তা বাড়ায় এবং ডাটা হারানোর ঝুঁকি কমায়।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          ব্যাকআপ সুবিধা ফিচারটি আপনার ডাটার সুরক্ষা নিশ্চিত করে এবং ব্যবসার
          গুরুত্বপূর্ণ তথ্য সবসময় নিরাপদ রাখতে সাহায্য করে।
        </p>
      </div>
    </section>
  );
};

export default DataBackup;
