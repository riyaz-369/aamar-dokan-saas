import Image from "next/image";
import React from "react";

const Accounts = () => {
  return (
    <section
      id="accounts"
      className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 py-8 px-4 lg:gap-12 lg:px-12"
    >
      <Image
        className="rounded w-full max-w-md lg:max-w-none"
        src="/Accounts.jpg"
        alt="Point of Sale System"
        height={800}
        width={800}
        priority
      />
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="font-ador text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          হিসাব-নিকাশ (Accounts)
        </h2>
        <h3 className="font-ador text-base md:text-lg font-medium">
          আয়-ব্যয়ের হিসাব রাখুন এবং ব্যালেন্স সঠিকভাবে বজায় রাখুন।
        </h3>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          হিসাব-নিকাশ ফিচারটি আপনার ব্যবসার সব আর্থিক তথ্য সহজে এবং সঠিকভাবে
          পরিচালনা করতে সাহায্য করে। এটি আয়-ব্যয়, লাভ-লোকসান এবং অন্যান্য আর্থিক
          লেনদেনের হিসাব রাখতে সহায়তা করে।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          আপনি আপনার ব্যবসার প্রতিটি আর্থিক লেনদেন ট্র্যাক করতে পারবেন, যার
          মাধ্যমে নির্ভুল প্রতিবেদন তৈরি করা সহজ হবে। এই ফিচারটি আর্থিক স্বচ্ছতা
          নিশ্চিত করে এবং হিসাব-নিকাশের কাজ দ্রুত ও সহজ করে তোলে।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          হিসাব-নিকাশ ফিচারটি আপনার ব্যবসার আর্থিক কার্যক্রমকে আরও সংগঠিত ও
          সুষ্ঠুভাবে পরিচালিত করতে সহায়তা করে, যাতে আপনি সঠিক সিদ্ধান্ত নিতে
          পারেন।
        </p>
      </div>
    </section>
  );
};

export default Accounts;
