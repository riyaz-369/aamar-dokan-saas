import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BsPatchQuestion } from "react-icons/bs";

type FAQType = {
  question: string;
  answer: string;
  category: string;
};

type FAQProps = {
  faqs: FAQType[];
};

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
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

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center flex-col gap-y-6 my-6">
        <BsPatchQuestion className="size-36 text-primary" />
        <h2 className="text-2xl font-bold">প্রায় জিজ্ঞাসিত প্রশ্নাবলী</h2>
      </div>

      <div className="mt-4 space-y-6">
        {Object.entries(groupedFAQs).map(([category, questions]) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-4 text-primary">
              {categoryTitles[category] || category}
            </h3>
            {questions.map((faq, index) => (
              <Accordion
                key={`${category}-${index}`}
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
