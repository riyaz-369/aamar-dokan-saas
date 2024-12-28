import Image from "next/image";
import React from "react";

const FeaturesHero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 mt-12">
      <div className="container flex items-center justify-center gap-12 py-24">
        <div>
          <h2 className="font-ador text-center text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            আমাদের সারভিস এবং ফিচারসমূহ
          </h2>
          <h2 className="font-ador text-center text-4xl font-bold mb-4 ">
            একটি প্ল্যাটফর্মে আপনার ব্যবসার সবকিছু!
          </h2>
          <h3 className="font-ador text-center text-lg font-medium mb-28 text-gray-700 dark:text-gray-300">
            AamerDokan-এর শক্তিশালী ফিচারসমূহের মাধ্যমে আপনার ব্যবসাকে উন্নততর
            করে তুলুন। <br />
            বিক্রি, স্টক, রিপোর্টিং থেকে শুরু করে ই-কমার্স পর্যন্ত—সবকিছু এক
            জায়গায়।
          </h3>
        </div>

        {/* image */}
        <div className="bg-gray-200 dark:bg-gray-800">
          <Image
            className="rounded"
            src="/features-hero.jpeg"
            alt=""
            height={400}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
