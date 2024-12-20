import Link from "next/link";
import React from "react";

const COOKIES = () => {
  return (
    <div className="w-full  md:px-32 px-4 min-h-[500px] py-6">
      <div className="p-4">
        <h1 className="text-5xl font-bold text-slate-700 dark:text-slate-200">
          Cookies Policy
        </h1>
        <p className="p-2 text-slate-700 dark:text-slate-200">
          <b>Effective Date:</b> 01/01/2025
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <p>
          AamarDokan (“we,” “our,” or “us”) uses cookies and similar
          technologies to enhance your experience on our platform. This Cookies
          Policy explains what cookies are, how we use them, and your choices
          regarding their usage.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <h2 className="font-bold text-2xl mb-2">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device (computer,
          smartphone, or tablet) when you visit a website. They help websites
          recognize your device and remember your preferences and activities.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <h2 className="font-bold text-2xl mb-2">2. Types of Cookies We Use</h2>
        <h3 className="font-bold text-xl mb-2">a. Essential Cookies</h3>
        <p>
          These cookies are necessary for the proper functioning of our
          platform. They enable you to navigate the website and use its core
          features, such as secure login.
        </p>
        <div className="p-4 text-md text-slate-700 dark:text-slate-200">
          <h3 className="font-bold text-xl mb-2">
            b. Performance and Analytics Cookies
          </h3>
          <p>
            These cookies collect information about how you use our platform,
            such as pages visited and time spent. We use this data to improve
            our platform’s performance and user experience.
          </p>
        </div>
        <div className="p-4 text-md text-slate-700 dark:text-slate-200">
          <h3 className="font-bold text-xl mb-2">c. Functionality Cookies</h3>
          <p>
            These cookies remember your preferences, such as language settings,
            to provide a more personalized experience.
          </p>
        </div>
        <div className="p-4 text-md text-slate-700 dark:text-slate-200">
          <h3 className="font-bold text-xl mb-2">d. Advertising Cookies</h3>
          <p>
            We may use these cookies to deliver relevant ads based on your
            interests and browsing behavior. They may also limit the number of
            times you see an ad.
          </p>
        </div>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <h2 className="font-bold text-2xl mb-2">3. How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul className="ps-4 list-disc ms-2">
          <li className="py-2">Provide essential platform features.</li>
          <li className="py-2">
            Analyze user behavior to enhance performance.
          </li>
          <li className="py-2">
            Remember user preferences for a personalized experience.
          </li>
          <li className="py-2">Deliver targeted advertisements.</li>
        </ul>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <h2 className="font-bold text-2xl mb-2">4. Third-Party Cookies</h2>
        <p>
          Some cookies on our platform are set by third parties, such as
          analytics providers (e.g., Google Analytics) or advertisers. These
          third parties may use cookies to collect data about your activities on
          our platform and other websites.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <h2 className="font-bold text-2xl mb-2">5. Your Cookie Choices</h2>
        <p>You can control and manage cookies in the following ways:</p>
        <div className="p-4 text-md text-slate-700 dark:text-slate-200">
          <h3 className="font-bold text-xl mb-2">a. Browser Settings</h3>
          <p>
            Most browsers allow you to manage cookie preferences, including
            blocking or deleting cookies. Check your browser’s help section for
            instructions.
          </p>
        </div>
        <div className="p-4 text-md text-slate-700 dark:text-slate-200">
          <h3 className="font-bold text-xl mb-2">b. Opt-Out Tools</h3>
          <p>
            You can opt out of certain third-party cookies using tools like:
          </p>
          <ul className="ps-4 list-disc">
            <li className="py-2">
              <Link href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings">
                Google Ads Settings
              </Link>
            </li>
            <li className="py-2">
              <Link href="/">Network Advertising Initiative Opt-Out Tool</Link>
            </li>
          </ul>
        </div>
        <div className="p-4 text-md text-slate-700 dark:text-slate-200">
          <h3 className="font-bold text-xl mb-2">c. Cookie Consent Banner</h3>
          <p>
            When you visit our platform, you may see a cookie consent banner
            where you can accept or decline non-essential cookies.
          </p>
        </div>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <h2 className="font-bold text-2xl mb-2">
          6. Changes to This Cookies Policy
        </h2>
        <ul className="ps-4">
          <li className="py-2">
            1. You own the data you upload to the Service.
          </li>
          <li className="py-2">
            2. You are responsible for the content and data you upload to the
            Service.
          </li>
        </ul>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <h2 className="font-bold text-2xl mb-2">7. Contact Us</h2>
        <p>
          If you have questions about this Cookies Policy or how we use cookies,
          please contact us at{" "}
          <Link href="mailto:aamardokan.online@gmail.com">
            aamardokan.online@gmail.com
          </Link>
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-200">
        <h2 className="font-bold text-2xl mb-2">8. Limitation of Liability</h2>
        <p>
          AamarDokan is not liable for indirect, incidental, or consequential
          damages arising from your use of the Service.
        </p>
      </div>
    </div>
  );
};

export default COOKIES;
