import {
  AiOutlineAim,
  AiOutlineAppstore,
  AiOutlineStar,
  AiOutlineTrophy,
} from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="">
      <div className="relative flex flex-col justify-center items-center py-32 mb-16">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg font-ador">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-lg leading-relaxed drop-shadow-md"> আমাদের SaaS প্ল্যাটফর্ম এমনভাবে ডিজাইন করা হয়েছে যা বাংলাদেশের ব্যবসায়িক প্রেক্ষাপটের জন্য উপযোগী এবং ব্যবহারকারীদের চাহিদা পূরণে সক্ষম।</p>
        </div>
        <div className="w-full flex  items-center gap-12 mt-24 px-24">
          <div>
            <h3 className="text-2xl font-bold font-ador pb-4">সম্পূর্ণ ডিজিটাল সল্যুশন</h3>
            <p>ই-কমার্স স্টোর থেকে শুরু করে ইনভেন্টরি ম্যানেজমেন্ট, রিপোর্টিং এবং কাস্টমার সাপোর্ট সবকিছু এক প্ল্যাটফর্মে পাওয়া যায়।</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-ador pb-4">স্থানীয় বাজারের জন্য উপযোগী</h3>
            <p>আমরা বাংলাদেশের ক্ষুদ্র ও মাঝারি ব্যবসায়ীদের চাহিদা অনুযায়ী সেবা প্রদান করি।</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-ador pb-4">কাস্টমাইজড সেবা</h3>
            <p>ব্যবসার ধরন অনুযায়ী ফিচার ও সাবস্ক্রিপশন প্ল্যান কাস্টমাইজ করার সুবিধা রয়েছে।</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-ador pb-4">সহজলভ্যতা</h3>
            <p>মোবাইল ও ওয়েব উভয় প্ল্যাটফর্ম থেকে ব্যবহার করা যায়।</p>
          </div>
        </div>
       
      </div>

      {/* Finantials */}
      <div className="container flex items-start mb-24 gap-24">
        <div>
          <h3 className="text-2xl font-bold font-ador mb-4">আমাদের আর্থিক লক্ষ্য</h3>
          <p className="text-md mb-4">আমাদের লক্ষ্য শুধু গ্রাহকসেবা নয়, বরং একটি লাভজনক এবং টেকসই ব্যবসায়িক মডেল প্রতিষ্ঠা করা।</p>
          <ul className="list-disc space-y-4 pl-6">
            <li><b>বার্ষিক আয় বৃদ্ধির লক্ষ্য:</b> আমাদের প্ল্যাটফর্মের বর্তমান গ্রাহক বেস থেকে বার্ষিক আয় ২০%-২৫% বৃদ্ধি করার লক্ষ্য।</li>
            <li><b>নতুন বাজার সম্প্রসারণ:</b> শুধু শহর নয়, গ্রামীণ ব্যবসায়ীদের জন্য সহজ এবং সাশ্রয়ী সেবা প্রদান করতে চাই।</li>
            <li><b>ROI (Return on Investment):</b> বিনিয়োগকারীদের জন্য উচ্চ ROI নিশ্চিত করতে আমরা ফিচার এবং কাস্টমার রিটেনশন স্ট্র্যাটেজিতে কাজ করছি।</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-ador mb-4">বাংলাদেশে আমাদের বাজার শেয়ার</h3>
          <p className="text-md mb-4">বাংলাদেশের দ্রুত বর্ধনশীল ই-কমার্স এবং ব্যবসায়িক প্রযুক্তির বাজার আমাদের জন্য বিশাল সুযোগ নিয়ে এসেছে।</p>
          <ul className="list-disc space-y-4 pl-6">
            <li><b>বাজারের চাহিদা:</b>  ক্ষুদ্র ও মাঝারি ব্যবসার জন্য SaaS সল্যুশনের চাহিদা প্রতিবছর ১৫%-২০% হারে বাড়ছে।</li>
            <li><b>প্রতিযোগিতামূলক সুবিধা:</b> আমাদের সাশ্রয়ী সাবস্ক্রিপশন মডেল, সহজলভ্যতা, এবং স্থানীয়করণ আমাদের প্রতিযোগীদের থেকে আলাদা করে।</li>
            <li><b>বাজার শেয়ার বৃদ্ধির লক্ষ্য:</b>আগামী ৩ বছরে বাংলাদেশের SaaS বাজারে আমাদের ৩০%-৩৫% শেয়ার অর্জনের পরিকল্পনা রয়েছে।</li>
          </ul>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto px-6 lg:px-0 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-start gap-6 space-y-12 md:space-y-0 md:space-x-12 py-12 mb-48">
          <div className="md:w-1/2">
            <AiOutlineAim size={80} className="text-primary " />
            <h2 className="text-3xl font-bold font-ador py-6">আমাদের মিশন</h2>
            <p className="leading-relaxed text-lg pb-4">
            আমাদের মিশন হলো ব্যবসায়িক কার্যক্রমকে আরও সহজ, আধুনিক এবং প্রযুক্তি-নির্ভর করে তোলা। আমরা চাই প্রতিটি উদ্যোক্তা ও ব্যবসায়ী তাদের কাজ আরও দক্ষতার সঙ্গে করতে পারেন এবং প্রযুক্তির সর্বোত্তম ব্যবহার নিশ্চিত করে উন্নত ভবিষ্যত তৈরি করতে পারেন।
            </p>
          </div>

          <div className="md:w-1/2">
            <AiOutlineStar size={80} className="text-primary "  />
            <h2 className="text-3xl font-bold font-ador py-6">আমাদের ভিশন</h2>
            <p className="leading-relaxed text-lg pb-4">আমাদের ভিশন হলো সারা বিশ্বের ব্যবসায়িক প্রযুক্তির অন্যতম নেতা হয়ে ওঠা।</p>
            <ul className="list-disc pl-6">
              <li>আমরা এমন একটি প্ল্যাটফর্ম তৈরি করতে চাই যা প্রতিটি ছোট-বড় ব্যবসার জন্য সহজলভ্য এবং কার্যকর।</li>
              <li>আমরা বিশ্বাস করি, প্রযুক্তি শুধুমাত্র বড় কোম্পানিগুলোর জন্য নয়, বরং প্রত্যেক উদ্যোক্তা, ক্ষুদ্র ব্যবসায়ী এবং নতুন স্টার্টআপের জন্য সমানভাবে প্রয়োজন।</li>
              <li>আমাদের লক্ষ্য হলো ডিজিটাল বাংলাদেশ গড়ার অংশীদার হওয়া এবং সারা বিশ্বের উদ্যোক্তাদের সাপোর্ট দেওয়া।</li>
            </ul>
          </div>

          
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="container flex flex-col mb-24">
        <div className=" flex">
            <div className="lex flex-col  space-y-6 px-6 py-4">
              <h3 className="text-2xl font-bold">বিনিয়োগকারীদের জন্য সুযোগ</h3>
              <p>আমাদের প্ল্যাটফর্মের স্থিতিশীল প্রবৃদ্ধি, স্থানীয় বাজারের গভীর জ্ঞান, এবং উদ্ভাবনী টেকনোলজি নিশ্চিত করে যে এটি একটি বিনিয়োগের জন্য আদর্শ স্থান।</p>
              <ul>
                <li><b>বাজার সম্ভাবনা:</b> বাংলাদেশের প্রায় ৫ লক্ষ ক্ষুদ্র ও মাঝারি ব্যবসা প্রযুক্তি সেবা ব্যবহারে আগ্রহী, যা আমাদের টার্গেট গ্রাহক।</li>
                <li><b>দীর্ঘমেয়াদী টেকসইতা:</b> আমাদের সাবস্ক্রিপশন মডেল বিনিয়োগকারীদের জন্য ধারাবাহিক রাজস্ব প্রবাহ নিশ্চিত করে।</li>
                <li><b>উন্নত প্রযুক্তি:</b> আমরা সর্বশেষ প্রযুক্তি এবং ক্লাউড সল্যুশন ব্যবহার করে গ্রাহকদের প্রয়োজন মেটাচ্ছি।</li>
                <li><b>সামাজিক প্রভাব:</b> আমাদের সেবা শুধুমাত্র ব্যবসা উন্নয়নের জন্য নয়, বরং স্থানীয় অর্থনীতিকে শক্তিশালী করার লক্ষ্যেও কাজ করছে।
  </li>
              </ul>
            </div>

            <div className=" flex flex-col ">
              <h3 className="text-2xl font-bold">কেন আমাদের প্ল্যাটফর্মে বিনিয়োগ করবেন?</h3>
              <ul>
                <li>দ্রুত বর্ধনশীল মার্কেট সেগমেন্ট।</li>
                <li> প্রতিযোগিতামূলক মূল্য এবং লাভজনক মডেল।</li>
                <li> দীর্ঘমেয়াদী প্রবৃদ্ধির উচ্চ সম্ভাবনা।</li>
                <li> গ্রাহক ভিত্তি এবং রিটেনশন স্ট্র্যাটেজি।</li>

              </ul>
            </div>
        </div>
        <p className="py-12 text-center">আমাদের প্ল্যাটফর্মে বিনিয়োগ শুধু লাভজনক নয়, বরং বাংলাদেশের প্রযুক্তিগত উন্নয়নে আপনার গুরুত্বপূর্ণ ভূমিকা রাখবে।<br/> <b>আজই আমাদের সঙ্গে যোগাযোগ করুন এবং আমাদের যাত্রার অংশ হন।</b></p>
      </div>

    </section>
  );
}
