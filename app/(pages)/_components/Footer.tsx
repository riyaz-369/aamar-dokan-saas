import Link from "next/link";
import {
  ExternalLink,
  FileText,
  HelpCircleIcon,
  Link2Icon,
} from "lucide-react";
import Image from "next/image";
import {
  FaAt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Important Links",
    icon: ExternalLink,
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      {
        href: "https://techsoulbd.com/career",
        label: "Career",
        isExternal: true,
      },
      { href: "/blogs", label: "Blog" },
    ],
  },
  {
    title: "Legals",
    icon: FileText,
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookies Policy" },
      { href: "/refund", label: "Refund Policy" },
    ],
  },
  {
    title: "Help",
    icon: HelpCircleIcon,
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/faq", label: "FAQs" },
      { href: "/contact", label: "Contact" },
      {
        href: "https://techsoulbd.com/Supershop-pos-management-software-documentation",
        label: "Documentation",
        isExternal: true,
      },
      {
        href: "/why-free",
        label: "Why Free?",
      },
    ],
  },
  {
    title: "Social Media",
    icon: Link2Icon,
    links: [
      {
        href: "https://www.facebook.com/aamardokan.online/",
        label: "Facebook",
        icon: FaFacebook,
        isExternal: true,
      },
      {
        href: "https://www.instagram.com/aamardokan.online/",
        label: "Instagram",
        icon: FaInstagram,
        isExternal: true,
      },
      {
        href: "https://www.linkedin.com/company/105304258/admin/dashboard/",
        label: "LinkedIn",
        icon: FaLinkedin,
        isExternal: true,
      },
      {
        href: "https://www.threads.net/@aamardokan.online",
        label: "Threads",
        icon: FaAt,
        isExternal: true,
      },
      {
        href: "https://x.com/AamarDokan",
        label: "Twitter",
        icon: FaXTwitter,
        isExternal: true,
      },
      {
        href: "https://www.youtube.com/@AamarDokan",
        label: "YouTube",
        icon: FaYoutube,
        isExternal: true,
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-200 py-12">
        <div className="container py-6 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {footerLinks.map(({ title, icon: Icon, links }) => (
            <div key={title}>
              <div className="flex items-center space-x-2 mb-2">
                <Icon className="w-6 h-6 text-orange" />
                <h3 className="text-md font-bold">{title}</h3>
              </div>
              <ul className="space-y-2 ps-8">
                {links.map(({ href, label, icon: Icon, isExternal }) => (
                  <li key={href}>
                    {isExternal ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-80 hover:opacity-100 transition-all hover:underline text-sm flex items-center space-x-2"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{label}</span>
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="opacity-80 hover:opacity-100 transition-all hover:underline text-sm flex items-center space-x-2"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-800 dark:text-gray-400 py-4 flex gap-x-4 justify-between md:items-center container">
        <div className="hidden md:block"></div>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Techsoul. All rights reserved.
        </p>
        <div className="md:flex items-center justify-center space-x-2">
          <p className="text-sm font-medium">We Accept:</p>
          <Image
            src="/BKash-bKash-Logo.wine.png"
            alt=""
            height={70}
            width={70}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
