import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row px-4 md:px-16 justify-center items-center py-16 md:py-48 gap-6 md:space-x-28">
      <div className="text-center lg:text-left border">
        <h1 className="text-orange text-6xl font-bold font-ador">
          আমার ব্যবসা, <br />
          আমার নিয়ন্ত্রণ
        </h1>
        <h2 className="text-gray-700 dark:text-gray-400 font-medium text-2xl md:text-3xl py-4">
          Aamar Dokan POS!
        </h2>
        <p className="text-lg md:text-xl">
          বাংলাদেশের ব্যবসাগুলোর জন্য সাশ্রয়ী, সহজ, এবং
        </p>
        <p className="text-lg md:text-xl">
          কার্যকরী পস সিস্টেম। দোকানের বিক্রি থেকে শুরু করে স্টক
        </p>
        <p className="text-lg md:text-xl">
          ব্যবস্থাপনা—সবকিছুই এখন এক প্ল্যাটফর্মে।
        </p>
        <Link href="/price">
          <Button size={"lg"} className="mt-6 w-full rounded-full h-12 text-md">
            এখনই শুরু করুন
          </Button>
        </Link>
      </div>
      <div className="border">
        <Image
          src="/aamar-dokan-shop.png"
          alt="Aamar Dokan"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
