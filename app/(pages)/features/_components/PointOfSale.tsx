import Image from "next/image";
import React from "react";

const PointOfSale = () => {
  return (
    <section className="flex items-center justify-center gap-12 py-8 px-12">
      <Image
        className="rounded"
        src="/point-of-sale.png"
        alt="Point of Sale System"
        height={800}
        width={800}
      />
      <div className="w-1/3">
        <h2 className="font-ador text-4xl font-bold mb-4">
          POS (পয়েন্ট অফ সেলস)
        </h2>
        <h3 className="font-ador text-lg font-medium">
          দ্রুত ও নির্ভুল বিক্রির জন্য উন্নত POS সিস্টেম।{" "}
        </h3>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          POS ফিচারটি আপনার বিক্রির প্রতিটি ধাপকে সহজ ও পরিষ্কারভাবে সাজিয়ে
          দেয়। অর্ডার নেওয়া থেকে শুরু করে পণ্য ডেলিভারি পর্যন্ত সবকিছু আপনি
          সহজে দেখতে ও নিয়ন্ত্রণ করতে পারবেন।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          আপনার ব্যবসার ধরন অনুযায়ী কাজ পরিচালনা, অনুমোদন এবং নোটিফিকেশন ঠিক
          করে নিতে পারবেন। এতে আপনার কাজ হবে দ্রুত, সহজ এবং ঝামেলামুক্ত।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          এই ফিচারটি কাজের জটিলতা কমিয়ে আনে, স্বচ্ছতা বাড়ায় এবং আপনার
          ব্যবসাকে সহজ করে তোলে।
        </p>
      </div>
    </section>
  );
};

export default PointOfSale;
