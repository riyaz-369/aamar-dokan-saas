import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div>
      <div className="py-10">
        <div className="container mx-auto px-6 lg:px-0 md:mb-24 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold mb-12">Customer Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
            <div className="p-6 border hover:bg-primary cursor-pointer border-primary shadow-lg rounded-lg text-center">
              <FaQuoteLeft className="text-gray-300 dark:text-gray-100 text-3xl" />
              <p className="italic my-4">
                Aamar Dokan has completely changed the way I shop. Their
                services are unmatched!
              </p>
              <FaQuoteRight className="text-gray-300 dark:text-gray-100 text-3xl" />
              <h4 className="font-bold mt-6">- Sarah Ahmed</h4>
            </div>

            <div className="p-6 border hover:bg-primary cursor-pointer border-primary shadow-lg rounded-lg text-center">
              <FaQuoteLeft className="text-gray-300 dark:text-gray-100 text-3xl" />
              <p className="italic my-4">
                Excellent customer service and a wide variety of products to
                choose from.
              </p>
              <FaQuoteRight className="text-gray-300 dark:text-gray-100 text-3xl" />
              <h4 className="font-bold mt-6">- John Doe</h4>
            </div>

            <div className="p-6 border hover:bg-primary cursor-pointer border-primary shadow-lg rounded-lg text-center">
              <FaQuoteLeft className="text-gray-300 dark:text-gray-100 text-3xl" />
              <p className="italic my-4">
                Quick delivery and secure payment options made my experience
                great!
              </p>
              <FaQuoteRight className="text-gray-300 dark:text-gray-100 text-3xl" />
              <h4 className="font-bold mt-6">- Priya Singh</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
