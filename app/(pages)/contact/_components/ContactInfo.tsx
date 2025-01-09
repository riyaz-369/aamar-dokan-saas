import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import {
  FaAt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold mb-6">Contact Information</h2>
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-primary text-white">
              {detail.icon}
            </div>
            <div>
              <h3 className="text-md font-semibold">{detail.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {detail.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 transition ${link.colorClass}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

const contactDetails = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    content: "+880 9760-322699",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: "support@aamardokan.com",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Address",
    content: "Uttara, Dhaka",
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/aamardokan.online",
    icon: <FaFacebook className="h-6 w-6" />,
    colorClass: "hover:text-blue-600",
  },
  {
    href: "https://www.instagram.com/aamardokan.online",
    icon: <FaInstagram className="h-6 w-6" />,
    colorClass: "hover:text-pink-500",
  },
  {
    href: "https://www.linkedin.com/company/105304258/admin/dashboard",
    icon: <FaLinkedin className="h-6 w-6" />,
    colorClass: "hover:text-blue-500",
  },
  {
    href: "https://x.com/AamarDokan",
    icon: <FaXTwitter className="h-6 w-6" />,
    colorClass: "hover:text-gray-600",
  },
  {
    href: "https://www.threads.net/@aamardokan.online",
    icon: <FaAt className="h-6 w-6" />,
    colorClass: "hover:text-gray-600",
  },
  {
    href: "https://www.youtube.com/@AamarDokan",
    icon: <FaYoutube className="h-6 w-6" />,
    colorClass: "hover:text-red-500",
  },
];
