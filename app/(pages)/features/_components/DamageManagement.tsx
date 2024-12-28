import Image from "next/image";
import React from "react";

const DamageManagement = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-center gap-12 py-8 px-12">
      <Image
        className="rounded"
        src="/Damage Management.jpg"
        alt="Point of Sale System"
        height={800}
        width={800}
      />
      <div className="w-1/3">
        <h2 className="font-ador text-4xl font-bold mb-4">
          ড্যামেজ ব্যবস্থাপনা (Damage Management)
        </h2>
        <h3 className="font-ador text-lg font-medium">
          ক্ষতিগ্রস্ত পণ্যের হিসাব এবং রিপোর্টিং করুন সহজে।
        </h3>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          ড্যামেজ ব্যবস্থাপনা ফিচারটি আপনাকে পণ্য বা মালামালের ক্ষতি সঠিকভাবে
          ট্র্যাক এবং পরিচালনা করতে সাহায্য করে। এটি ক্ষতিগ্রস্ত পণ্যের তথ্য
          রেকর্ড, প্রতিবেদন তৈরি এবং দ্রুত সমাধান নিশ্চিত করতে সহায়তা করে।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          যখনই পণ্য ক্ষতিগ্রস্ত হয়, আপনি তা সঠিকভাবে চিহ্নিত এবং রিপোর্ট করতে
          পারবেন, যাতে দ্রুত পদক্ষেপ নেওয়া যায়। এই ফিচারটি ক্ষতির পরিমাণ কমাতে,
          কার্যক্রমে স্বচ্ছতা আনার এবং আপনার ব্যবসার কার্যক্ষমতা বৃদ্ধি করতে
          সহায়ক।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          ড্যামেজ ব্যবস্থাপনা ফিচারটি আপনার ব্যবসার ঝুঁকি কমায় এবং অপারেশন আরও
          স্বচ্ছ ও দক্ষ করে তোলে।
        </p>
      </div>
    </section>
  );
};

export default DamageManagement;
