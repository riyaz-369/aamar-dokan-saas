import Image from "next/image";
import React from "react";

const OrderCart = () => {
  return (
    <div className="p-6 rounded-lg border border-dotted shadow">
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          className="rounded-lg shadow-md"
          src="/service-images/shopping-online-with-discount-conceptual-banner-vector-47519198.jpg"
          alt="E-Commerce Shopping"
          priority
          width={350}
          height={400}
        />
        <div className="space-y-6 flex-1">
          <h3 className="font-semibold text-3xl text-gray-800 dark:text-gray-100">
            E-Commerce Online Shopping Service
          </h3>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            exercitationem a porro ratione, facere sit ducimus earum nostrum.
            Omnis ab culpa numquam asperiores quasi itaque esse, laudantium
            ratione corrupti ea.
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            This service helps you shop conveniently online with amazing
            discounts and a wide range of products to choose from.
          </p>
        </div>
      </div>
      <div className="mt-8 border-t p-6 flex justify-between">
        <p className="text-lg font-semibold flex flex-col">
          <span className="text-gray-700 dark:text-gray-200">
            Package Name:
          </span>{" "}
          <span className="text-primary">Basic Plan</span>
        </p>
        <p className="text-lg font-semibold flex flex-col">
          <span className="text-gray-700 dark:text-gray-200">Price:</span>{" "}
          <span className="">1000 BDT. / Monthly</span>
        </p>
        <p className="text-lg font-semibold flex flex-col">
          <span className="text-gray-700 dark:text-gray-200">Duration:</span>{" "}
          <span className="">1 Month</span>
        </p>
        <p className="text-lg font-semibold flex flex-col">
          <span className="text-gray-700 dark:text-gray-200">
            Next Billing:
          </span>{" "}
          <span className="">On Next Month</span>
        </p>
      </div>
    </div>
  );
};

export default OrderCart;
