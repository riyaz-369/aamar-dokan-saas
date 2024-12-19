import {
  Archive,
  BellDot,
  Calculator,
  LucideDatabaseBackup,
  Trash2,
  Warehouse,
} from "lucide-react";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { MdOutlinePointOfSale } from "react-icons/md";
import { TbReceiptTax } from "react-icons/tb";

const BusinessPlatform = () => {
  return (
    <div className="features container mb-28">
      <h2 className="font-ador text-center text-4xl font-bold mb-4 ">
        একটি প্ল্যাটফর্মে আপনার ব্যবসার সবকিছু!
      </h2>
      <h3 className="font-ador text-center text-lg font-medium mb-28">
        AamerDokan-এর শক্তিশালী ফিচারসমূহের মাধ্যমে আপনার ব্যবসাকে উন্নততর করে
        তুলুন। <br />
        বিক্রি, স্টক, রিপোর্টিং থেকে শুরু করে ই-কমার্স পর্যন্ত—সবকিছু এক জায়গায়।
      </h3>
      <div className="grid grid-cols-4 gap-x-8 gap-y-8 ">
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <MdOutlinePointOfSale
            size={50}
            className="text-orange mb-2 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            POS (পয়েন্ট অফ সেলস)
          </h4>
          <p className="font-ador font-light mt-2">
            দ্রুত ও নির্ভুল বিক্রির জন্য উন্নত POS সিস্টেম।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <Warehouse className="text-orange mb-2 h-12 w-12 group-hover:text-white " />
          <h4 className="font-ador text-lg font-medium">
            গুদাম ব্যবস্থাপনা (Warehouse Management)
          </h4>
          <p className="font-ador font-light mt-2">
            পণ্য সংরক্ষণ ও স্টক ট্র্যাকিংয়ের জন্য আধুনিক গুদাম মডিউল।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <Archive className="text-orange h-12 w-12 mb-2 group-hover:text-white " />
          <h4 className="font-ador text-lg font-medium">
            ক্রয় ও সরবরাহ (Procurement)
          </h4>
          <p className="font-ador font-light mt-2">
            সহজেই পণ্য ক্রয় এবং সরবরাহের তথ্য ম্যানেজ করুন।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <Trash2
            size={50}
            className="text-orange h-12 w-12 mb-2 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            ড্যামেজ ব্যবস্থাপনা (Damage Management)
          </h4>
          <p className="font-ador font-light mt-2">
            ক্ষতিগ্রস্ত পণ্যের হিসাব এবং রিপোর্টিং করুন সহজে।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <AiOutlineProduct
            size={50}
            className="text-orange mb-2 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            স্টক ব্যবস্থাপনা (Stock Management)
          </h4>
          <p className="font-ador font-light mt-2">
            ইনভেন্টরি আপডেট ও স্বয়ংক্রিয় স্টক রিপোর্ট তৈরি করুন।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <Calculator
            size={50}
            className="text-orange mb-2 h-12 w-12 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            হিসাব-নিকাশ (Accounts)
          </h4>
          <p className="font-ador font-light mt-2">
            আয়-ব্যয়ের হিসাব রাখুন এবং ব্যালেন্স সঠিকভাবে বজায় রাখুন।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <FaChartLine
            size={50}
            className="text-orange mb-2 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            রিপোর্টিং এবং বিশ্লেষণ (Reporting & Analytics)
          </h4>
          <p className="font-ador font-light mt-2">
            বিক্রি, লাভ-ক্ষতি এবং অন্যান্য রিপোর্টিংয়ের জন্য অ্যানালিটিক্স টুল।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <LucideDatabaseBackup
            size={50}
            className="text-orange mb-2 h-12 w-12 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            ব্যাকআপ সুবিধা (Data Backup)
          </h4>
          <p className="font-ador font-light mt-2">
            আপনার গুরুত্বপূর্ণ ডেটা নিরাপদ রাখতে স্বয়ংক্রিয় ব্যাকআপ সিস্টেম।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <BsShopWindow
            size={50}
            className="text-orange mb-2 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            ই-কমার্স সাপোর্ট (E-commerce Integration)
          </h4>
          <p className="font-ador font-light mt-2">
            আপনার দোকানকে অনলাইনে নিয়ে যেতে ই-কমার্স সাপোর্ট।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <CiMobile3
            size={50}
            className="text-orange mb-2 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            মোবাইল অ্যাপ (Mobile Reporting App)
          </h4>
          <p className="font-ador font-light mt-2">
            মোবাইল থেকে ব্যবসার রিপোর্ট দেখুন এবং আপডেট পান।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <BellDot
            size={50}
            className="text-orange mb-2 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            নোটিফিকেশন সিস্টেম (Notifications)
          </h4>
          <p className="font-ador font-light mt-2">
            গুরুত্বপূর্ণ আপডেট ও রিমাইন্ডার পান ইনস্ট্যান্ট নোটিফিকেশনের
            মাধ্যমে।
          </p>
        </div>
        <div className="border border-orange rounded-xl cursor-pointer hover:bg-orange group  p-8 hover:shadow-md">
          <TbReceiptTax
            size={50}
            className="text-orange mb-2 group-hover:text-white "
          />
          <h4 className="font-ador text-lg font-medium">
            ভ্যাট এবং ট্যাক্স (VAT & Tax Management)
          </h4>
          <p className="font-ador font-light mt-2">
            সহজে ভ্যাট এবং ট্যাক্স গণনা করুন এবং ট্র্যাক রাখুন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlatform;
