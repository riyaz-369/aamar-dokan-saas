import Image from "next/image";
import React from "react";

const ECommerceIntegration = () => {
  return (
    <section className="flex items-center justify-center gap-12 py-8 px-12">
      <Image
        className="rounded"
        src="/e-commerce-integration.png"
        alt="Point of Sale System"
        height={800}
        width={800}
      />
      <div className="w-1/3">
        <h2 className="font-ador text-4xl font-bold mb-4">
          ই-কমার্স (E-commerce Integration)
        </h2>
        <h3 className="font-ador text-lg font-medium">
          আপনার দোকানকে অনলাইনে নিয়ে যেতে ই-কমার্স সাপোর্ট।
        </h3>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          ই-কমার্স ফিচারটি আপনার ব্যবসাকে অনলাইনে কার্যক্রম পরিচালনা করতে
          সাহায্য করে। এটি আপনার ওয়েবসাইটকে ই-কমার্স প্ল্যাটফর্মের সাথে একত্রিত
          করে, যাতে আপনি অনলাইনে পণ্য বিক্রয়, অর্ডার ম্যানেজমেন্ট এবং পেমেন্ট
          গ্রহণ করতে পারেন।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          এটি আপনার ব্যবসার সকল অনলাইন কার্যক্রম একটি জায়গায় নিয়ে আসে, যাতে সহজে
          ট্র্যাকিং, অর্ডার প্রসেসিং এবং স্টক ম্যানেজমেন্ট করা যায়।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          ই-কমার্স ফিচারটি আপনার ব্যবসাকে ডিজিটাল দুনিয়ায় আরও সহজ ও সফলভাবে
          পরিচালিত করতে সহায়তা করে, এবং আপনার অনলাইন বিক্রয় বৃদ্ধি করতে সাহায্য
          করে।
        </p>
      </div>
    </section>
  );
};

export default ECommerceIntegration;
