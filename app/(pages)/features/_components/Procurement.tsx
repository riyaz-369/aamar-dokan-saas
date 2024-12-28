import Image from "next/image";
import React from "react";

const Procurement = () => {
  return (
    <section className="flex items-center justify-center gap-12 py-8 px-12">
      <Image
        className="rounded"
        src="/procurement.jpg"
        alt="Point of Sale System"
        height={800}
        width={800}
      />

      <div className="w-1/3">
        <h2 className="font-ador text-4xl font-bold mb-4">
          ক্রয় ও সরবরাহ (Procurement)
        </h2>
        <h3 className="font-ador text-lg font-medium">
          সহজেই পণ্য ক্রয় এবং সরবরাহের তথ্য ম্যানেজ করুন।
        </h3>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          ক্রয় ও সরবরাহ ফিচারটি আপনার ব্যবসার জন্য পণ্য সংগ্রহ এবং সরবরাহের সব
          প্রক্রিয়া সহজ এবং দ্রুত করার জন্য ডিজাইন করা হয়েছে। আপনি সরবরাহকারীদের
          সাথে যোগাযোগ, অর্ডার প্লেস এবং পণ্য ডেলিভারি ট্র্যাক করতে পারবেন এক
          জায়গায়।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          এটি আপনাকে খরচ নিয়ন্ত্রণ করতে, সময়মতো পণ্য সরবরাহ নিশ্চিত করতে এবং
          সরবরাহের জটিলতা দূর করতে সহায়তা করে। ক্রয় প্রক্রিয়া সহজ করে তোলে এবং
          আপনার ব্যবসার অপারেশন আরও দক্ষ করে তোলে।
        </p>
        <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          এই ফিচারটি আপনার ক্রয় প্রক্রিয়াকে দ্রুত, স্বচ্ছ এবং সুবিধাজনক করে
          তোলে, যাতে আপনি সব সময় সঠিক পণ্য সঠিক সময়ে পেতে পারেন।
        </p>
      </div>
    </section>
  );
};

export default Procurement;
