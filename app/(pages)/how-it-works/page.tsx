import Image from "next/image";
import React from "react";

const HowItWork = () => {
  return (
    <section className="w-full min-h-[500px] my-16">
      {/* Header Section */}
      <div className="text-center py-32 dark:bg-gray-900 bg-gray-100 px-4">
        <h1 className="text-5xl font-bold text-slate-700 dark:text-slate-100">
          How Does AmarDokan Work?
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-100 my-4">
          AmarDokan is a platform that connects buyers and sellers. Here's how
          it works:
        </p>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 mt-16 space-y-16">
        {/* Step 1 */}
        <div
          id="sign-up"
          className="flex flex-col md:flex-row items-center border-b pb-8"
        >
          <div className="md:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100 mb-4">
              1. Create an Account
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-100 mb-6">
              Sign up for an account to start buying and selling products.
            </p>
          </div>
          <div className="md:w-1/2 px-4">
            <Image
              className="w-full rounded-lg shadow-md"
              src="/create-account.png"
              alt="Create an Account"
              height={700}
              width={700}
              quality={100}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div
          id="store-setup"
          className="flex flex-col md:flex-row-reverse items-center border-b pb-8"
        >
          <div className="md:w-1/2 px-4 text-right">
            <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100 mb-4">
              2. Setup Your Store
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-100 mb-6">
              Create a store and list your products for sale.
            </p>
          </div>
          <div className="md:w-1/2 px-4">
            <Image
              className="w-full rounded-lg shadow-md"
              src="/store-setup.png"
              alt="Setup Your Store"
              height={700}
              width={700}
              quality={100}
            />
          </div>
        </div>

        {/* Step 3 */}
        <div
          id="start-selling"
          className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100 mb-4">
              3. Start Selling
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-100 mb-6">
              Start selling your products to customers and grow your business.
            </p>
          </div>
          <div className="md:w-1/2 px-4">
            <Image
              className="w-full rounded-lg shadow-md"
              src="/start-selling.png"
              alt="Start Selling"
              height={700}
              width={700}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
