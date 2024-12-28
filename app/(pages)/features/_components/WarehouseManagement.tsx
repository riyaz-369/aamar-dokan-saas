import Image from "next/image";
import React from "react";

const WarehouseManagement = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-center gap-12 py-8 px-12">
      <Image
        className="rounded"
        src="/warehouse-management.jpg"
        alt="Point of Sale System"
        height={800}
        width={800}
      />
      <div className="w-1/3">
        <h2 className="font-ador text-4xl font-bold mb-4">
          গুদাম ব্যবস্থাপনা (Warehouse Management)
        </h2>
        <h3 className="font-ador text-lg font-medium">
          পণ্য সংরক্ষণ ও স্টক ট্র্যাকিংয়ের জন্য আধুনিক গুদাম মডিউল।
        </h3>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          গুদাম ব্যবস্থাপনা ফিচারটি আপনার গুদামের সমস্ত কার্যক্রম সহজ এবং
          সুষ্ঠুভাবে পরিচালনা করতে সহায়ক। এখানে আপনি পণ্য সঞ্চয়, ইনভেন্টরি
          পর্যবেক্ষণ এবং স্টক নিয়ন্ত্রণ খুব সহজে করতে পারবেন।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          আপনার গুদামের সব তথ্য এক জায়গায় রাখা হয়, যাতে আপনি পণ্য কোথায় আছে,
          কোনটা কম বা বেশি, সব কিছু সহজেই ট্র্যাক করতে পারেন। এটি সময় এবং শ্রম
          বাঁচাতে সাহায্য করে এবং আপনার ব্যবসার কাজ আরও কার্যকরী ও ঝামেলামুক্ত
          করে তোলে।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          এই ফিচারটি গুদামের পরিচালনাকে সহজ, দ্রুত এবং আরও স্বচ্ছ করে তোলে।
        </p>
      </div>
    </section>
  );
};

export default WarehouseManagement;
