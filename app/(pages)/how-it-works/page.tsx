/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HowItWork = () => {
  return (
    <section className="w-full min-h-[500px] my-16">
      {/* Header Section */}
      <div className="md:pt-24 pb-6 md:pb-24 px-6 text-center">
        <h1 className="text-5xl font-bold font-ador text-slate-700 dark:text-slate-100 mb-6 md:mb-4">
          কিভাবে এটি কাজ করে?
        </h1>
        <p className="text-xl font-ador text-slate-700 dark:text-slate-100 my-4 md:mx-28">
          আমাদের SaaS প্ল্যাটফর্ম ব্যবহার করা অত্যন্ত সহজ। মাত্র কয়েকটি ধাপে
          আপনি আপনার ফ্রি অ্যাকাউন্ট তৈরি করে সেবা সাবস্ক্রাইব করতে পারবেন এবং
          আপনার স্টোর সেটআপ করতে পারবেন। নিচের ধাপগুলো অনুসরণ করুন:
        </p>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 pb-24 space-y-16">
        {/* Step 1 */}
        <div
          id="sign-up"
          className="flex flex-col md:flex-row items-center border-b py-24"
        >
          <div className="md:w-1/2 w-auto">
            <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100 mb-4">
              ১. ফ্রি অ্যাকাউন্ট তৈরি করুন
            </h2>
            <ul className="text-lg text-slate-700 dark:text-slate-100 mb-6 list-disc list-inside space-y-3">
              <li>আমাদের ওয়েবসাইটে যান এবং "Sign Up" বাটনে ক্লিক করুন।</li>
              <li>
                আপনার নাম, ইমেইল এবং একটি নিরাপদ পাসওয়ার্ড দিয়ে রেজিস্ট্রেশন
                ফর্ম পূরণ করুন।
              </li>
              <li>
                ইমেইলের মাধ্যমে পাওয়া ভেরিফিকেশন লিংকে ক্লিক করে আপনার
                অ্যাকাউন্ট সক্রিয় করুন।
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 w-auto">
            <iframe
              className="lg:w-[560px] lg:h-[315px] rounded-md"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/nQjSGvtgwdg?si=E0Zpf31aZAEitPRv&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Step 2 */}
        <div
          id="store-setup"
          className="flex flex-col md:flex-row-reverse items-center border-b py-24"
        >
          <div className="md:w-1/2 w-auto px-4 text-left">
            <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100 mb-4">
              ২. সেবা সাবস্ক্রাইব করুন
            </h2>
            <ul className="text-lg text-slate-700 dark:text-slate-100 mb-6 list-disc list-inside space-y-3">
              <li>লগইন করার পরে, "Services" সেকশনে যান।</li>
              <li>আপনার প্রয়োজন অনুযায়ী একটি সেবা প্যাকেজ নির্বাচন করুন।</li>
              <li>
                সাবস্ক্রিপশন প্ল্যান বেছে নিয়ে পেমেন্ট সম্পন্ন করুন। আমরা
                স্থানীয় ও আন্তর্জাতিক পেমেন্ট পদ্ধতি সমর্থন করি।
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 w-auto">
            <iframe
              className="lg:w-[560px] lg:h-[315px] rounded-md"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/FJV-5YwA8Po?si=cv9UQDqebfAMNk2z&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Step 3 */}
        <div
          id="start-selling"
          className="flex flex-col md:flex-row items-center pt-24"
        >
          <div className="md:w-1/2 w-auto px-4">
            <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100 mb-4">
              ৩. স্টোর সেটআপ করুন
            </h2>
            <ul className="text-lg text-slate-700 dark:text-slate-100 mb-6 list-disc list-inside space-y-3">
              <li>আপনার ড্যাশবোর্ডে যান এবং "Setup Store" অপশনে ক্লিক করুন।</li>
              <li>স্টোরের নাম, বিবরণ, এবং লোগো আপলোড করুন।</li>
              <li>
                পণ্য যোগ করতে এবং মূল্য নির্ধারণ করতে স্টোর সেটআপ গাইড অনুসরণ
                করুন।
              </li>
              <li>আপনার স্টোর প্রকাশ করতে "Publish" বাটনে ক্লিক করুন।</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-auto px-4">
            <iframe
              className="lg:w-[560px] lg:h-[315px] rounded-md"
              // width="560"
              // height=""
              src="https://www.youtube-nocookie.com/embed/teHqqyZEN-A?si=RNbAC3p_sZMsaK8r&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-b py-24 md:py-48">
        <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100 mb-4 font-ador">
          এখন আপনি প্রস্তুত!
        </h2>
        <p className="text-xl text-slate-700 dark:text-slate-100 mb-6 text-center md:mx-28">
          আপনার ব্যবসার জন্য আমাদের আধুনিক এবং সহজ ব্যবস্থাপনা সিস্টেম ব্যবহার
          করে কাজ শুরু করুন। আপনি যেকোনো সমস্যায় আমাদের কাস্টমার সাপোর্ট টিমের
          সাহায্য নিতে পারেন।
        </p>
        <Link href="/auth/sign-up">
          <Button className="mt-4">এখন শুরু করুন</Button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWork;
