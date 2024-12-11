import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button at the top right corner and fill out the registration form.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password?' link on the login page and following the instructions.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact us via email at support@example.com or by using the live chat feature available on the website.",
    },
    {
      question: "Where can I find my orders?",
      answer:
        "You can find your orders in the 'My Account' section under 'Order History.'",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and other secure payment options.",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center">Help Center</h1>
        <p className="text-center mt-2">
          Find answers to your questions or contact support for help.
        </p>

        {/* Search Bar */}
        <div className="mt-6">
          <Input type="text" placeholder="Search for help..." />
        </div>

        {/* FAQ Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold ">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold ">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-100 mt-2">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold ">Still Need Help?</h2>
          <p className="mt-2">
            If you can&apos;t find the answer you&apos;re looking for, feel free
            to reach out to our support team.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Button>Contact Support</Button>
            <Button variant="secondary">Visit Community Forum</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
