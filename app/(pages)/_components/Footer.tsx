import Link from "next/link";
import {
  ExternalLink,
  FileText,
  HelpCircleIcon,
  Link2Icon,
} from "lucide-react";
import Image from "next/image";

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
      { href: "/contact", label: "Contact" },
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
      { href: "/blogs", label: "Blog" },
      { href: "/documentation", label: "Documentation" },
    ],
  },
  {
    title: "Social Media",
    icon: Link2Icon,
    links: [
      { href: "https://facebook.com", label: "Facebook", icon: null },
      { href: "https://instagram.com", label: "Instagram", icon: null },
      { href: "https://linkedin.com", label: "LinkedIn", icon: null },
      { href: "https://twitter.com", label: "Twitter", icon: null },
      { href: "https://youtube.com", label: "YouTube", icon: null },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-12">
        <div className="container py-6 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {footerLinks.map(({ title, icon: Icon, links }) => (
            <div key={title}>
              <div className="flex items-center space-x-2 mb-4">
                <Icon className="w-6 h-6 text-orange" />
                <h3 className="text-md font-bold">{title}</h3>
              </div>
              <ul className="space-y-2 ps-8">
                {links.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-gray-900 hover:underline dark:hover:text-gray-100 text-sm flex items-center space-x-2"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{label}</span>
                    </Link>
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
