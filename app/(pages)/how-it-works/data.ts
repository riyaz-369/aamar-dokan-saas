export type StepsType = {
  id: string;
  title: string;
  description: string[];
  video: string;
};

export const steps: StepsType[] = [
  {
    id: "sign-up",
    title: "১. ফ্রি অ্যাকাউন্ট তৈরি করুন",
    description: [
      'আমাদের ওয়েবসাইটে যান এবং "Sign Up" বাটনে ক্লিক করুন।',
      "আপনার নাম, ইমেইল এবং একটি নিরাপদ পাসওয়ার্ড দিয়ে রেজিস্ট্রেশন ফর্ম পূরণ করুন।",
      "ইমেইলের মাধ্যমে পাওয়া ভেরিফিকেশন লিংকে ক্লিক করে আপনার অ্যাকাউন্ট সক্রিয় করুন।",
    ],
    video:
      "https://www.youtube.com/embed/nQjSGvtgwdg?si=E0Zpf31aZAEitPRv&amp;controls=0",
  },
  {
    id: "store-setup",
    title: "২. সেবা সাবস্ক্রাইব করুন",
    description: [
      'লগইন করার পরে, "Services" সেকশনে যান।',
      "আপনার প্রয়োজন অনুযায়ী একটি সেবা প্যাকেজ নির্বাচন করুন।",
      "সাবস্ক্রিপশন প্ল্যান বেছে নিয়ে পেমেন্ট সম্পন্ন করুন। আমরা স্থানীয় ও আন্তর্জাতিক পেমেন্ট পদ্ধতি সমর্থন করি।",
    ],
    video:
      "https://www.youtube.com/embed/FJV-5YwA8Po?si=cv9UQDqebfAMNk2z&amp;controls=0",
  },
  {
    id: "start-selling",
    title: "৩. স্টোর সেটআপ করুন",
    description: [
      'আপনার ড্যাশবোর্ডে যান এবং "Setup Store" অপশনে ক্লিক করুন।',
      "স্টোরের নাম, বিবরণ, এবং লোগো আপলোড করুন।",
      "পণ্য যোগ করতে এবং মূল্য নির্ধারণ করতে স্টোর সেটআপ গাইড অনুসরণ করুন।",
      'আপনার স্টোর প্রকাশ করতে "Publish" বাটনে ক্লিক করুন।',
    ],
    video:
      "https://www.youtube-nocookie.com/embed/teHqqyZEN-A?si=RNbAC3p_sZMsaK8r&amp;controls=0",
  },
];
