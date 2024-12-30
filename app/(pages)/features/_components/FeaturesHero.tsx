import Image from "next/image";
import React from "react";

const FeaturesHero = () => {
  return (
    <section className="mt-12">
      <div className="container flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-12 py-12 md:py-24">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h2 className="font-ador text-lg md:text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            আমাদের সারভিস এবং ফিচারসমূহ
          </h2>
          <h2 className="font-ador text-2xl md:text-4xl font-bold mb-4">
            একটি প্ল্যাটফর্মে আপনার ব্যবসার সবকিছু!
          </h2>
          <h3 className="font-ador text-sm md:text-lg font-medium mb-8 md:mb-12 text-gray-700 dark:text-gray-300">
            AamerDokan-এর শক্তিশালী ফিচারসমূহের মাধ্যমে আপনার ব্যবসাকে উন্নততর
            করে তুলুন। <br />
            বিক্রি, স্টক, রিপোর্টিং থেকে শুরু করে ই-কমার্স পর্যন্ত—সবকিছু এক
            জায়গায়।
          </h3>
        </div>

        {/* Image */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded">
          <Image
            className="rounded max-w-full h-auto"
            src="/features-hero.jpeg"
            alt="Features Hero"
            height={400}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
