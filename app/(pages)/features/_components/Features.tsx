import {
  AiOutlineShoppingCart,
  AiOutlineCreditCard,
  AiOutlineSafety,
  AiOutlineCustomerService,
  AiOutlineGlobal,
  AiOutlineSync,
  AiOutlineGift,
  AiOutlineDollar,
  AiOutlineRocket,
} from "react-icons/ai";

export default function Features() {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative bg-no-repeat bg-cover bg-center w-full h-96 flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-t dark:from-black to-transparent" />
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Features
          </h1>
          <p className="text-lg leading-relaxed drop-shadow-md">
            Discover the advanced features that make Aamar Dokan your preferred
            destination for seamless online shopping.
          </p>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="container mx-auto px-6 lg:px-0 py-24">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Why Choose Aamar Dokan?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineShoppingCart size={80} className="text-primary" />
            <h3 className="text-2xl font-bold">Wide Product Range</h3>
            <p className="text-gray-600">
              Explore a vast collection of products across various categories to
              meet all your needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineCreditCard size={80} className="text-secondary" />
            <h3 className="text-2xl font-bold">Secure Payments</h3>
            <p className="text-gray-600">
              Shop confidently with our secure and reliable payment methods,
              protecting your transactions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineSafety size={80} className="text-green-500" />
            <h3 className="text-2xl font-bold">100% Buyer Protection</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority. Enjoy peace of mind with
              our buyer protection policies.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineCustomerService size={80} className="text-yellow-500" />
            <h3 className="text-2xl font-bold">24/7 Customer Support</h3>
            <p className="text-gray-600">
              We&apos;re always here to assist you. Reach out to our friendly
              support team anytime.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineGlobal size={80} className="text-blue-500" />
            <h3 className="text-2xl font-bold">Global Shipping</h3>
            <p className="text-gray-600">
              Delivering your favorite products to your doorstep, no matter
              where you are.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineSync size={80} className="text-purple-500" />
            <h3 className="text-2xl font-bold">Easy Returns</h3>
            <p className="text-gray-600">
              Hassle-free returns and exchanges for a seamless shopping
              experience.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineGift size={80} className="text-pink-500" />
            <h3 className="text-2xl font-bold">Exclusive Offers</h3>
            <p className="text-gray-600">
              Avail amazing discounts, deals, and special offers exclusively on
              our platform.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineDollar size={80} className="text-teal-500" />
            <h3 className="text-2xl font-bold">Best Prices</h3>
            <p className="text-gray-600">
              Enjoy competitive pricing and unbeatable deals on all your
              favorite products.
            </p>
          </div>

          {/* Feature 9 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center space-y-6">
            <AiOutlineRocket size={80} className="text-orange-500" />
            <h3 className="text-2xl font-bold">Fast Delivery</h3>
            <p className="text-gray-600">
              Experience speedy and reliable delivery to get your products when
              you need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
