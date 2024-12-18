import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const WhyChooseUs = () => {
  return (
    <div className="whyUs  m-48  flex flex-col">
      <div className="flex bg-orange mb-2 border rounded-2xl p-12">
        <div className=" w-1/2">
          <h2 className="text-3xl font-ador font-bold text-lightWhite mb-6">
            ব্যবসা পরিচালনা এখন আরও <b />
            সহজ এবং সাশ্রয়ী!
          </h2>
          <h3 className="text-md font-ador font-normal text-gray-800 mb-8">
            আপনার ব্যবসার জন্য সঠিক POS সিস্টেম খোঁজা অনেক সময় ব্যয়বহুল এবং
            জটিল হতে পারে। কিন্তু AamerDokan SAAS POS সিস্টেমের মাধ্যমে, আপনি
            এখন কোনো upfront খরচ ছাড়াই শুরু করতে পারবেন এবং খরচ নিয়ন্ত্রণ করতে
            পারবেন। এটি একটি মাইক্রোসার্ভিস ভিত্তিক অ্যাপ্লিকেশন, যা আপনার
            প্রয়োজন অনুযায়ী সহজেই স্কেল করা যায়।
          </h3>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <Image
            alt="POS Terminal"
            src="/pos-terminal.png"
            height={500}
            width={330}
          />
        </div>
      </div>
      <div className="CTA w-full mt-0 border flex gap-2 rounded-2xl ">
        <div className=" w-2/3 ">
          <div className=" py-4 px-12 ">
            <h2 className="w-full text-md font-ador font-bold text-brown dark:text-primary">
              ব্যবসা পরিচালনা এখন আরও সহজ এবং সাশ্রয়ী!
            </h2>
            <p className="font-light text-sm">
              এটি আপনার খরচ কমাবে এবং সময় বাঁচাবে—এবং সবচেয়ে গুরুত্বপূর্ণ,
              আপনার ব্যবসাকে আরও সফল করবে!
            </p>
          </div>
        </div>
        <div className="flex w-1/3">
          <Button
            variant="ghost"
            className="text-lg font-medium font-avro bg-lightWhite text-black h-full w-full hover:bg-orange hover:text-lightWhite justify-center items-center  py-4 px-12 rounded-2xl"
          >
            ফ্রি অ্যাকাউন্ট তৈরি করুন
            <LiaLongArrowAltRightSolid size="30" className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
