import Image from "next/image";
import React from "react";

const VatAndTax = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-center gap-12 py-8 px-12">
      <Image
        className="rounded"
        src="/vat-tax.png"
        alt="Point of Sale System"
        height={800}
        width={800}
      />
      <div className="w-1/3">
        <h2 className="font-ador text-4xl font-bold mb-4">
          ভ্যাট এবং ট্যাক্স (VAT & Tax Management)
        </h2>
        <h3 className="font-ador text-lg font-medium">
          সহজে ভ্যাট এবং ট্যাক্স গণনা করুন এবং ট্র্যাক রাখুন।
        </h3>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          ভ্যাট এবং ট্যাক্স ব্যবস্থাপনা ফিচারটি আপনার ব্যবসার সব ধরনের ট্যাক্স
          হিসাব এবং পরিশোধ সঠিকভাবে পরিচালনা করতে সাহায্য করে। এটি ভ্যাট এবং
          অন্যান্য ট্যাক্সের হিসাব স্বয়ংক্রিয়ভাবে করে, যাতে আপনাকে আর manually
          হিসাব করতে না হয়।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          আপনি সহজেই ট্যাক্সের হার, পেমেন্ট এবং রিপোর্ট ট্র্যাক করতে পারবেন, যা
          ট্যাক্স সম্পর্কিত কাজকে দ্রুত এবং ঝামেলামুক্ত করে তোলে। এই ফিচারটি
          আপনাকে সঠিকভাবে ট্যাক্স পরিশোধ করতে এবং ব্যবসার আর্থিক স্বচ্ছতা
          নিশ্চিত করতে সহায়তা করে।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          ভ্যাট এবং ট্যাক্স ব্যবস্থাপনা ফিচারটি আপনার ব্যবসার আর্থিক কার্যক্রমকে
          সুষ্ঠু, স্বচ্ছ এবং আইনগতভাবে সঠিক রাখতে সাহায্য করে।
        </p>
      </div>
    </section>
  );
};

export default VatAndTax;
