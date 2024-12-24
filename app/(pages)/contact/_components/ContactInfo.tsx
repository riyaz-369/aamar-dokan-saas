import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-extrabold mb-6">Contact Information</h2>
      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full bg-primary text-white">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-md font-semibold">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+880 9760-322699</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full bg-primary text-white">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-md font-semibold">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              support@aamardokan.com
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full bg-primary text-white">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-md font-semibold">Address</h3>
            <p className="text-gray-600 dark:text-gray-400">Uttara, Dhaka</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500 transition"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
