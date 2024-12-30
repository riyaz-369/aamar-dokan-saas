import Image from "next/image";
import React from "react";

const Notifications = () => {
  return (
    <section
      id="notifications"
      className="flex flex-col lg:flex-row items-center justify-center gap-8 py-8 px-4 lg:gap-12 lg:px-12"
    >
      <Image
        className="rounded w-full max-w-md lg:max-w-none"
        src="/notification.png"
        alt="Notifications System"
        height={800}
        width={800}
        priority
      />
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="font-ador text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          নোটিফিকেশন সিস্টেম (Notifications)
        </h2>
        <h3 className="font-ador text-base md:text-lg font-medium">
          গুরুত্বপূর্ণ আপডেট ও রিমাইন্ডার পান ইনস্ট্যান্ট নোটিফিকেশনের মাধ্যমে।
        </h3>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          নোটিফিকেশন সিস্টেম ফিচারটি আপনাকে গুরুত্বপূর্ণ তথ্য এবং আপডেটগুলো
          তাত্ক্ষণিকভাবে জানাতে সহায়তা করে। আপনি অর্ডার, স্টক, পেমেন্ট বা
          অন্যান্য গুরুত্বপূর্ণ ঘটনাগুলির বিষয়ে মোবাইল বা ইমেইল নোটিফিকেশন পেতে
          পারেন।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          এটি আপনার ব্যবসার প্রতিটি মুহূর্তে আপডেট রাখে, যাতে আপনি কোনো
          গুরুত্বপূর্ণ বিষয় মিস না করেন। এই ফিচারটি আপনার কাজের প্রক্রিয়া আরও
          গতিশীল ও কার্যকরী করে তোলে, কারণ আপনি সর্বদা প্রয়োজনীয় তথ্য জানতে
          পারবেন।
        </p>
        <p className="text-sm md:text-base mt-2 text-gray-700 dark:text-gray-300">
          নোটিফিকেশন সিস্টেম ফিচারটি আপনার সময় বাঁচায় এবং ব্যবসার কার্যক্রমকে
          আরও দ্রুত এবং স্বচ্ছভাবে পরিচালিত করতে সাহায্য করে।
        </p>
      </div>
    </section>
  );
};

export default Notifications;
