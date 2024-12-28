import {
  AiOutlineAim,
  AiOutlineAppstore,
  AiOutlineStar,
  AiOutlineTrophy,
} from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="">
      <div className="relative bg-primary flex flex-col justify-center items-center py-32 mb-16">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg font-ador">
            About Us
          </h1>
          <p className="text-lg leading-relaxed drop-shadow-md">
            At Aamar Dokan, we are dedicated to providing a seamless online
            shopping experience that connects customers to their favorite
            products with ease and trust.
          </p>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
        >
          <path
            fill="#FFFFFF"
            d="M0,64 C360,120 1080,10 1440,60 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto px-6 lg:px-0 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-48 w-full max-w-6xl">
          <div className="text-center flex flex-col items-center space-y-6 border-b-2 md:border-b-0 border-r-0 md:border-r-2 lg:border-r border-gray-200 py-4 px-8">
            <AiOutlineAim size={150} className="text-primary" />
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="leading-relaxed">
              Our mission is to empower customers with a reliable and intuitive
              platform that ensures satisfaction at every step of their shopping
              journey.
            </p>
          </div>

          <div className="text-center flex flex-col items-center space-y-6 border-b-2 lg:border-b-0 border-r-0 lg:border-r-2 border-gray-200 py-4 px-8">
            <AiOutlineStar size={150} />
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="leading-relaxed">
              To be the leading e-commerce platform, offering unparalleled
              product variety, security, and customer support globally.
            </p>
          </div>

          <div className="text-center flex flex-col items-center space-y-6 py-4 px-8">
            <AiOutlineAppstore size={150} className="text-primary" />
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="leading-relaxed">
              We value transparency, customer satisfaction, and innovation. Our
              aim is to create a shopping experience you can trust.
            </p>
          </div>
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="container mx-auto px-6 lg:px-0 flex flex-col items-center mb-24">
        <h2 className="text-4xl font-extrabold mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl w-full">
          <div className="text-center flex flex-col items-center space-y-6 px-6 py-4">
            <AiOutlineTrophy size={100} className="text-yellow-500" />
            <h3 className="text-2xl font-bold">10k+ Products</h3>
            <p>
              We’ve curated a wide range of products to meet the diverse needs
              of our customers.
            </p>
          </div>

          <div className="text-center flex flex-col items-center space-y-6 px-6 py-4">
            <AiOutlineTrophy size={100} className="text-yellow-500" />
            <h3 className="text-2xl font-bold">50k+ Happy Customers</h3>
            <p>
              Our platform has earned the trust of thousands of customers
              worldwide.
            </p>
          </div>

          <div className="text-center flex flex-col items-center space-y-6 px-6 py-4">
            <AiOutlineTrophy size={100} className="text-yellow-500" />
            <h3 className="text-2xl font-bold">Award-Winning Service</h3>
            <p>
              Recognized for excellence in e-commerce innovation and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="container mx-auto px-6 lg:px-0 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold mb-12">Customer Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
            <div className="p-6 shadow-lg rounded-lg text-center">
              <FaQuoteLeft className="text-gray-300 dark:text-gray-100 text-3xl" />
              <p className="italic my-4">
                Aamar Dokan has completely changed the way I shop. Their
                services are unmatched!
              </p>
              <FaQuoteRight className="text-gray-300 dark:text-gray-100 text-3xl" />
              <h4 className="font-bold mt-6">- Sarah Ahmed</h4>
            </div>

            <div className="p-6 shadow-lg rounded-lg text-center">
              <FaQuoteLeft className="text-gray-300 dark:text-gray-100 text-3xl" />
              <p className="italic my-4">
                Excellent customer service and a wide variety of products to
                choose from.
              </p>
              <FaQuoteRight className="text-gray-300 dark:text-gray-100 text-3xl" />
              <h4 className="font-bold mt-6">- John Doe</h4>
            </div>

            <div className="p-6 shadow-lg rounded-lg text-center">
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

      {/* Call-to-Action Section */}
      {/* <div className="relative bg-primary py-24">
        <div className="container mx-auto px-6 lg:px-0 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Shop with Us?
          </h2>
          <div className="space-x-4">
            <Button variant="secondary">Browse Products</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
        >
          <path
            fill="#FFFFFF" 
            d="M0,80 C360,100 1080,40 1440,80 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
