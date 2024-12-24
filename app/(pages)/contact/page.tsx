import React from "react";
import ContactUs from "./_components/ContactUs";
import ContactInfo from "./_components/ContactInfo";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 my-16 border rounded-lg">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-2/3">
          <ContactUs />
        </div>
        <div className="md:border-l md:pl-8 md:max-w-sm w-full">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
