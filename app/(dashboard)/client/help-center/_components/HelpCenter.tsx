import FAQ from "@/app/(pages)/_components/FAQ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const faqs = [
  {
    question: "আমরা কী কার্যকারিতা দিতে পারি?",
    answer:
      "আমরা আপনার খরচ কমাবে এবং সময় বাঁচাবে। আমাদের মাধ্যমে ইন্টারনেটের ব্যবহারে আপনার সুবিধা আনতে পারি।",
    category: "basicQuestions",
  },
  {
    question: "আমি কীভাবে একটি অ্যাকাউন্ট তৈরি করতে পারি?",
    answer:
      "অ্যাকাউন্ট তৈরি করতে, উপরের ডান কোণে 'সাইন আপ' বোতামে ক্লিক করুন এবং নিবন্ধন ফর্ম পূরণ করুন।",
    category: "basicQuestions",
  },
  {
    question: "আমি কীভাবে আমার পাসওয়ার্ড রিসেট করতে পারি?",
    answer:
      "আপনি 'পাসওয়ার্ড ভুলে গেছেন?' লিঙ্কে ক্লিক করে এবং নির্দেশনা অনুসরণ করে আপনার পাসওয়ার্ড রিসেট করতে পারবেন।",
    category: "basicQuestions",
  },
  {
    question: "কীভাবে আমি কাস্টমার সাপোর্টের সাথে যোগাযোগ করতে পারি?",
    answer:
      "আপনি আমাদের সাথে ইমেইল support@example.com এর মাধ্যমে বা ওয়েবসাইটে উপলব্ধ লাইভ চ্যাট ফিচার ব্যবহার করে যোগাযোগ করতে পারেন।",
    category: "basicQuestions",
  },
  {
    question: "আমি কোথায় আমার অর্ডারগুলি দেখতে পারি?",
    answer:
      "আপনি 'আমার অ্যাকাউন্ট' সেকশনে 'অর্ডার ইতিহাস' এর নিচে আপনার অর্ডারগুলি দেখতে পাবেন।",
    category: "basicQuestions",
  },
  {
    question: "আপনারা কী কার্যকারিতা দিতে পারেন?",
    answer:
      "আমরা আপনার খরচ কমাবে এবং সময় বাঁচাবে। আমাদের মাধ্যমে ইন্টারনেটের ব্যবহারে আপনার সুবিধা আনতে পারি।",
    category: "advancedQuestions",
  },
  {
    question: "আমি কীভাবে আমার পাসওয়ার্ড রিসেট করতে পারি?",
    answer:
      "আপনি 'পাসওয়ার্ড ভুলে গেছেন?' লিঙ্কে ক্লিক করে এবং নির্দেশনা অনুসরণ করে আপনার পাসওয়ার্ড রিসেট করতে পারবেন।",
    category: "advancedQuestions",
  },
  {
    question: "আমি কীভাবে আমার অর্ডারগুলি দেখতে পারি?",
    answer:
      "আপনি 'আমার অ্যাকাউন্ট' সেকশনে 'অর্ডার ইতিহাস' এর নিচে আপনার অর্ডারগুলি দেখতে পাবেন।",
    category: "advancedQuestions",
  },
  {
    question: "আমি কীভাবে একটি অ্যাকাউন্ট তৈরি করতে পারি?",
    answer:
      "অ্যাকাউন্ট তৈরি করতে, উপরের ডান কোণে 'সাইন আপ' বোতামে ক্লিক করুন এবং নিবন্ধন ফর্ম পূরণ করুন।",
    category: "paymentQuestions",
  },
  {
    question: "আপনারা কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?",
    answer:
      "আমরা প্রধান ক্রেডিট কার্ড, PayPal এবং অন্যান্য নিরাপদ পেমেন্ট অপশন গ্রহণ করি।",
    category: "paymentQuestions",
  },
  {
    question: "আমি কীভাবে আমার পাসওয়ার্ড রিসেট করতে পারি?",
    answer:
      "আপনি 'পাসওয়ার্ড ভুলে গেছেন?' লিঙ্কে ক্লিক করে এবং নির্দেশনা অনুসরণ করে আপনার পাসওয়ার্ড রিসেট করতে পারবেন।",
    category: "paymentQuestions",
  },
];

const HelpCenter = () => {
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center">Help Center</h1>
        <p className="text-center mt-2">
          Find answers to your questions or contact support for help.
        </p>

        {/* Search Bar */}
        <div className="mt-6">
          <Input type="text" placeholder="Search for help..." />
        </div>

        <FAQ faqs={faqs} />

        {/* Contact Support Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold ">Still Need Help?</h2>
          <p className="mt-2">
            If you can&apos;t find the answer you&apos;re looking for, feel free
            to reach out to our support team.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Button>Contact Support</Button>
            <Button variant="secondary">Visit Community Forum</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
