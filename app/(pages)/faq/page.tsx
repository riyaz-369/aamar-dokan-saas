import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BsPatchQuestion } from "react-icons/bs";

const faqs = [
  {
    section: "General Questions",
    question: "What is AamarDokan?",
    answer:
      "AamarDokan is a SaaS platform that helps businesses manage their e-commerce operations, including inventory, sales, and more. It’s designed to simplify business processes and boost efficiency.",
  },
  {
    section: "General Questions",
    question: "Who can use AamarDokan?",
    answer:
      "AamarDokan is ideal for small to medium-sized business owners who want to manage their online or physical stores seamlessly. Whether you run a retail shop, e-commerce website, or both, AamarDokan is for you.",
  },
  {
    section: "General Questions",
    question: "How can I sign up?",
    answer:
      "To sign up, visit our website and click on the 'Sign Up' button. Follow the instructions to create an account and start using the platform.",
  },
  {
    section: "Features and Functionality",
    question: "What features does AamarDokan offer?",
    answer:
      "AamarDokan offers a wide range of features, including: Inventory management, Sales tracking, Customer management, Analytics and reporting, Multi-channel sales integration.",
  },
  {
    section: "Features and Functionality",
    question: "Can I manage multiple stores with AamarDokan?",
    answer:
      "Yes! AamarDokan allows you to manage multiple stores from a single account, making it easier to oversee all your operations.",
  },
  {
    section: "Features and Functionality",
    question: "Does AamarDokan support mobile access?",
    answer:
      "Yes, AamarDokan has a mobile-friendly platform and an app for managing your business on the go.",
  },
  {
    section: "Pricing and Subscription",
    question: "How much does AamarDokan cost?",
    answer:
      "Our pricing plans vary based on your business needs. Visit our pricing page for detailed information about our subscription tiers.",
  },
  {
    section: "Pricing and Subscription",
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a [Insert Duration] free trial for new users to explore the platform and its features.",
  },
  {
    section: "Pricing and Subscription",
    question: "Can I change my subscription plan?",
    answer:
      "Absolutely! You can upgrade or downgrade your subscription at any time by accessing the billing section in your account settings.",
  },
  {
    section: "Technical Support",
    question: "What should I do if I encounter technical issues?",
    answer:
      "If you face any technical issues, you can: Check our Help Center for troubleshooting tips, or contact our support team at support@aamardokan.com.",
  },
  {
    section: "Technical Support",
    question: "Does AamarDokan provide customer support?",
    answer:
      "Yes, our customer support team is available [Insert Hours] to assist you. You can reach us via email or chat support on our platform.",
  },
  {
    section: "Data and Security",
    question: "Is my data secure on AamarDokan?",
    answer:
      "Yes, we prioritize your data security and implement industry-standard measures to protect it. For more details, refer to our Privacy Policy.",
  },
  {
    section: "Data and Security",
    question: "Can I export my data from AamarDokan?",
    answer:
      "Yes, you can export your data at any time through the platform’s export tools.",
  },
  {
    section: "Getting Started",
    question: "How do I set up my store on AamarDokan?",
    answer:
      "Once you’ve signed up, follow our onboarding guide to set up your store, including adding products, configuring payment options, and customizing your store settings.",
  },
  {
    section: "Getting Started",
    question: "Does AamarDokan provide tutorials or guides?",
    answer:
      "Yes, we offer detailed tutorials, video guides, and documentation to help you get the most out of our platform.",
  },
];

const FAQ = () => {
  const groupedFAQs = faqs.reduce<Record<string, FAQType[]>>((acc, faq) => {
    acc[faq.category] = acc[faq.category] || [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  const categoryTitles: Record<string, string> = {
    basicQuestions: "সাধারণ প্রশ্ন",
    advancedQuestions: "উন্নত প্রশ্ন",
    paymentQuestions: "পেমেন্ট সংক্রান্ত প্রশ্ন",
  };

  const uniqueSections = [...new Set(faqs.map((faq) => faq.section))];

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center gap-4 my-6">
        <BsPatchQuestion className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">FAQ</h2>
      </div>

      <div className="mt-4 md:px-48 px-6 space-y-10">
        {uniqueSections.map((section) => (
          <div key={section} className="">
            <h3 className="text-xl font-bold mb-4 text-primary">{section}</h3>
            {faqs
              .filter((faq) => faq.section === section) // Filter FAQs belonging to the current section
              .map((faq, index) => (
                <Accordion
                  key={`${section}-${index}`}
                  type="single"
                  collapsible
                  className="rounded-lg transition-all duration-300 border hover:border-primary hover:bg-primary/5 mb-5"
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
