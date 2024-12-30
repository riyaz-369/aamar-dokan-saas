import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const WhyChooseUs = () => {
  return (
    <div className="container mt-16 lg:mt-24 mb-24 lg:mb-24 flex flex-col gap-8">
      {/* First Section */}
      <div className="flex flex-col-reverse md:flex-row bg-orange mb-2 border rounded-2xl p-6 lg:p-12 gap-6">
        <div className="w-full lg:w-1/2 text-center md:text-start">
          <h2 className="text-xl lg:text-3xl font-ador font-bold text-lightWhite mb-4 lg:mb-6">
            ব্যবসা পরিচালনা এখন আরও <br className="lg:hidden" />
            সহজ এবং সাশ্রয়ী!
          </h2>
          <h3 className="font-ador font-normal text-gray-800 mb-6 lg:mb-8">
            আপনার ব্যবসার জন্য সঠিক POS সিস্টেম খোঁজা অনেক সময় ব্যয়বহুল এবং
            জটিল হতে পারে। কিন্তু AamerDokan SAAS POS সিস্টেমের মাধ্যমে, আপনি
            এখন কোনো upfront খরচ ছাড়াই শুরু করতে পারবেন এবং খরচ নিয়ন্ত্রণ করতে
            পারবেন। এটি একটি মাইক্রোসার্ভিস ভিত্তিক অ্যাপ্লিকেশন, যা আপনার
            প্রয়োজন অনুযায়ী সহজেই স্কেল করা যায়।
          </h3>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center">
          <Image
            alt="POS Terminal"
            src="/pos-terminal.png"
            height={400}
            width={300}
            className="w-[200px] lg:w-[330px]"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full border flex flex-col lg:flex-row gap-4 lg:gap-2 rounded-2xl p-4 lg:p-0">
        <div className="w-full lg:w-2/3">
          <div className="py-4 px-6 lg:px-12">
            <h2 className="font-ador font-bold text-brown dark:text-primary mb-2">
              ব্যবসা পরিচালনা এখন আরও সহজ এবং সাশ্রয়ী!
            </h2>
            <p className="text-sm font-light">
              এটি আপনার খরচ কমাবে এবং সময় বাঁচাবে—এবং সবচেয়ে গুরুত্বপূর্ণ,
              আপনার ব্যবসাকে আরও সফল করবে!
            </p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/3 justify-center items-center">
          <Link
            href="/auth/sign-up"
            className="text-sm lg:text-lg font-medium font-avro bg-lightWhite text-black h-12 lg:h-full w-full hover:bg-orange hover:text-lightWhite flex justify-center items-center py-2 lg:py-4 px-6 lg:px-12 rounded-2xl"
          >
            ফ্রি অ্যাকাউন্ট তৈরি করুন
            <LiaLongArrowAltRightSolid size="20" className="lg:text-xl ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
