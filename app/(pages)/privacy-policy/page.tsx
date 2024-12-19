import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full md:px-32 px-4 min-h-[500px] py-6">
      <div className="p-4">
        <h1 className="text-5xl font-bold text-slate-700 dark:text-slate-100">
          Privacy Policy
        </h1>
        <p className="p-2 text-slate-700 dark:text-slate-100">
          <b>Effective Date:</b> 01/01/2025
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <p>
          AamarDokan values your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, and protect your data.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">1. Information We Collect</h2>
        <ol className="ps-4">
          <li className="py-2">
            1. <b>Account Information:</b> Name, email, phone number, and
            payment details.
          </li>
          <li className="py-2">
            2. <b>Usage Data:</b> Information about your interaction with the
            Service.
          </li>
          <li className="py-2">
            3. <b>Device Data:</b> IP address, browser type, and device
            identifiers.
          </li>
        </ol>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">
          2. How We Use Your Information
        </h2>
        <ol className="ps-4">
          <li className="py-2">1. To provide and improve the Service.</li>
          <li className="py-2">
            2. To communicate with you about updates and support.
          </li>
          <li className="py-2">
            3. To process payments and prevent fraudulent activities.
          </li>
        </ol>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">3. Data Sharing</h2>
        <p>
          We do not sell your data. We may share data with third parties only to
          provide the Service, such as payment processors and cloud hosting
          providers.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">4. Data Retention</h2>
        <p>
          We retain your data for as long as necessary to provide the Service or
          comply with legal obligations.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">5. Your Rights</h2>
        <ul className="ps-4">
          <li className="py-2">
            1. You can access, update, or delete your data by contacting us.
          </li>
          <li className="py-2">
            2. You can opt out of marketing communications at any time.
          </li>
        </ul>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">6. Cookies and Tracking</h2>
        <p>
          We use cookies to enhance your experience. You can manage cookie
          preferences in your browser settings.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">7. Security</h2>
        <p>
          We implement industry-standard measures to protect your data. However,
          no method of transmission or storage is completely secure.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">8. International Users</h2>
        <p>
          If you are accessing the Service outside [Insert Country], note that
          your data may be processed in a country with different privacy laws.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-2xl mb-2">9. Children’s Privacy</h2>
        <p>
          Our Service is not intended for children under 13, and we do not
          knowingly collect their data.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100 mb-11">
        <h2 className="font-bold text-2xl mb-2">
          10. Changes to Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. Continued use of the
          Service after updates constitutes acceptance of the revised Policy.
        </p>
      </div>
      <div className="p-4 text-md text-slate-700 dark:text-slate-100 mb-11">
        <h2 className="font-bold text-2xl mb-2">11. Contact Information</h2>
        <p>
          For questions about this Privacy Policy, contact us at
          privacy@aamardokan.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
