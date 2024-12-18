// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./(pages)/_components/Header";
import Footer from "./(pages)/_components/Footer";
import { Button } from "@/components/ui/button";
import { MdOutlinePointOfSale } from "react-icons/md";
import {
  Archive,
  BellDot,
  Calculator,
  LucideDatabaseBackup,
  Trash2,
  Warehouse,
} from "lucide-react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { TbReceiptTax } from "react-icons/tb";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="flex-col gap-8 row-start-2 items-center sm:items-start ">
      <Header />
      <main className="w-full min-h-96 flex-1 flex-col flex justify-center items-center">
        <div className="hero flex w-full px-16 justify-center items-end py-40 gap-6">
          <div className="">
            <h1 className="text-orange text-6xl font-bold font-ador">
              আমার ব্যবসা, <br />
              আমার নিয়ন্ত্রণ
            </h1>
            <h2 className="text-gray-700 dark:text-gray-400 font-medium text-3xl py-4">
              Aamar Dokan POS!
            </h2>
            <p>বাংলাদেশের ব্যবসাগুলোর জন্য সাশ্রয়ী, সহজ, এবং</p>
            <p>কার্যকরী পস সিস্টেম। দোকানের বিক্রি থেকে শুরু করে স্টক</p>
            <p>ব্যবস্থাপনা—সবকিছুই এখন এক প্ল্যাটফর্মে।</p>
            <div className="space-x-4">
              <Button
                size={"lg"}
                className="mt-6 w-full rounded-full h-12 text-md"
              >
                এখনই শুরু করুন
              </Button>
            </div>
          </div>
          <div className="">
            <Image
              className=""
              src="/aamar-dokan-shop.png"
              alt="Aamar Dokan"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        {/* <div className="hero flex w-full px-16 justify-center items-end gap-x-8 py-40 space-x-4">
          <div className="">
            <h1 className="text-orange text-6xl font-bold font-ador">
              আমার ব্যবসা, <br />
              আমার নিয়ন্ত্রণ
            </h1>
            <h2 className="text-gray-700 font-medium text-3xl py-4">
              Aamer Dokan POS!
            </h2>
          </div>
          <div className="">
            <Image
              className=""
              src="/aamar-dokan-shop.png"
              alt="Aamar Dokan"
              width={300}
              height={300}
              priority
            />
          </div>
          <div className="text-lg">
            <p>বাংলাদেশের ব্যবসাগুলোর জন্য সাশ্রয়ী, সহজ, এবং</p>
            <p>কার্যকরী পস সিস্টেম। দোকানের বিক্রি থেকে শুরু করে স্টক</p>
            <p>ব্যবস্থাপনা—সবকিছুই এখন এক প্ল্যাটফর্মে।</p>
            <div className="space-x-4">
              <Button className="mt-6">Start Now</Button>
              <Button className="mt-6">See Pricing</Button>
            </div>
          </div>
        </div> */}
        <div className="features px-32 mb-28">
          <h2 className="font-ador text-center text-4xl font-bold mb-4 ">
            একটি প্ল্যাটফর্মে আপনার ব্যবসার সবকিছু!
          </h2>
          <h3 className="font-ador text-center text-lg font-medium mb-28">
            AamerDokan-এর শক্তিশালী ফিচারসমূহের মাধ্যমে আপনার ব্যবসাকে উন্নততর
            করে তুলুন। <br />
            বিক্রি, স্টক, রিপোর্টিং থেকে শুরু করে ই-কমার্স পর্যন্ত—সবকিছু এক
            জায়গায়।
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
                বিক্রি, লাভ-ক্ষতি এবং অন্যান্য রিপোর্টিংয়ের জন্য অ্যানালিটিক্স
                টুল।
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
                আপনার গুরুত্বপূর্ণ ডেটা নিরাপদ রাখতে স্বয়ংক্রিয় ব্যাকআপ
                সিস্টেম।
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
        <div className="whyUs  m-48  flex flex-col">
          <div className="flex bg-orange mb-2 border rounded-2xl p-12">
            <div className=" w-1/2">
              <h2 className="text-3xl font-ador font-bold text-lightWhite mb-6">
                ব্যবসা পরিচালনা এখন আরও <b />
                সহজ এবং সাশ্রয়ী!
              </h2>
              <h3 className="text-md font-ador font-normal text-gray-800 mb-8">
                আপনার ব্যবসার জন্য সঠিক POS সিস্টেম খোঁজা অনেক সময় ব্যয়বহুল এবং
                জটিল হতে পারে। কিন্তু AamerDokan SAAS POS সিস্টেমের মাধ্যমে,
                আপনি এখন কোনো upfront খরচ ছাড়াই শুরু করতে পারবেন এবং খরচ
                নিয়ন্ত্রণ করতে পারবেন। এটি একটি মাইক্রোসার্ভিস ভিত্তিক
                অ্যাপ্লিকেশন, যা আপনার প্রয়োজন অনুযায়ী সহজেই স্কেল করা যায়।
              </h3>
            </div>
            <div className="flex w-1/2 justify-center items-center">
              <Image
                alt="POS Terminal"
                src="/pos-terminal.png"
                height={500}
                width={330}
              />
            </div>
          </div>
          <div className="CTA w-full mt-0 border flex gap-2 rounded-2xl ">
            <div className=" w-2/3 ">
              <div className=" py-4 px-12 ">
                <h2 className="w-full text-md font-ador font-bold text-brown dark:text-primary">
                  ব্যবসা পরিচালনা এখন আরও সহজ এবং সাশ্রয়ী!
                </h2>
                <p className="font-light text-sm">
                  এটি আপনার খরচ কমাবে এবং সময় বাঁচাবে—এবং সবচেয়ে গুরুত্বপূর্ণ,
                  আপনার ব্যবসাকে আরও সফল করবে!
                </p>
              </div>
            </div>
            <div className="flex w-1/3">
              <Button
                variant="ghost"
                className="text-lg font-medium font-avro bg-lightWhite text-black h-full w-full hover:bg-orange hover:text-lightWhite justify-center items-center  py-4 px-12 rounded-2xl"
              >
                ফ্রি অ্যাকাউন্ট তৈরি করুন
                <LiaLongArrowAltRightSolid size="30" className="text-xl" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
