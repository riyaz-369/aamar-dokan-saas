import Image from "next/image";
import React from "react";

const PointOfSale = () => {
  return (
    <section
      id="pos"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 py-8 px-4 md:px-12"
    >
      {/* Image */}
      <Image
        className="rounded max-w-full h-auto"
        src="/point-of-sale.png"
        alt="Point of Sale System"
        height={800}
        width={800}
      />

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="font-ador text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
          POS (পয়েন্ট অফ সেলস)
        </h2>
        <h3 className="font-ador text-base md:text-lg font-medium text-center md:text-left">
          দ্রুত ও নির্ভুল বিক্রির জন্য উন্নত POS সিস্টেম।
        </h3>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300 text-center md:text-left">
          POS ফিচারটি আপনার বিক্রির প্রতিটি ধাপকে সহজ ও পরিষ্কারভাবে সাজিয়ে
          দেয়। অর্ডার নেওয়া থেকে শুরু করে পণ্য ডেলিভারি পর্যন্ত সবকিছু আপনি
          সহজে দেখতে ও নিয়ন্ত্রণ করতে পারবেন।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300 text-center md:text-left">
          আপনার ব্যবসার ধরন অনুযায়ী কাজ পরিচালনা, অনুমোদন এবং নোটিফিকেশন ঠিক
          করে নিতে পারবেন। এতে আপনার কাজ হবে দ্রুত, সহজ এবং ঝামেলামুক্ত।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300 text-center md:text-left">
          এই ফিচারটি কাজের জটিলতা কমিয়ে আনে, স্বচ্ছতা বাড়ায় এবং আপনার
          ব্যবসাকে সহজ করে তোলে।
        </p>
      </div>
    </section>
  );
};

export default PointOfSale;
