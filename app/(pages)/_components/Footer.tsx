import Link from "next/link";
import { ExternalLink, FileText, Settings, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200  py-12">
        <div className="container mx-auto px-4 py-6 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ExternalLink className="w-6 h-6 text-orange" />
              <h3 className="text-md font-bold">Important Links</h3>
            </div>
            <ul className="space-y-2 ps-8">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://techsoulbd.com/career"
                  target="_blank"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-6 h-6 text-orange" />
              <h3 className="text-md font-bold">Documents</h3>
            </div>
            <ul className="space-y-2 ps-8">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-6 h-6 text-orange" />
              <h3 className="text-md font-bold">Services</h3>
            </div>
            <ul className="space-y-2 ps-8">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/support"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="w-6 h-6 text-orange" />
              <h3 className="text-md font-bold">Business</h3>
            </div>
            <ul className="space-y-2 ps-8">
              <li>
                <Link
                  href="/business/partnerships"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/business/investors"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="/business/press"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dark:text-gray-400 py-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Techsoul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
