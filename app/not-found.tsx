import React from "react";
import Header from "./(pages)/_components/Header";
import Footer from "./(pages)/_components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  AppWindow,
  BadgeDollarSign,
  CircleHelp,
  Home,
  Shapes,
} from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex-col row-start-2 items-center sm:items-start ">
      <Header />
      <main className="w-full h-screen mx-auto flex-1 flex flex-col md:flex-row justify-center items-center">
        <div className="flex w-full  md:w-1/2 justify-center items-center p-4 md:p-0">
          <Image
            className=""
            src="/404.svg"
            alt="Aamar Dokan"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="flex md:flex-col flex-row justify-center items-center  w-full md:w-1/2 min-h-96 md:justify-start md:items-start pt-10">
          <div className="px-10">
            <h1 className="text-3xl text-primary text-start font-bold font-ador ">
              আপনি ভুল জায়গায় এসেছেন
            </h1>
            <p className="text-xl text-start font-normal font-ador ">
              তার চেয়ে আমাদের অন্যান্য পৃষ্ঠাগুলো একবার দেখুন!
            </p>
          </div>
          <ul className="pt-8 space-y-3 flex flex-col items-start px-10">
            <li className="flex justify-center items-center gap-2">
              <Home className="h-4 w-4" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-center items-center gap-2">
              <Shapes className="h-4 w-4" />
              <Link href="/features">Features</Link>
            </li>
            <li className="flex justify-center items-center gap-2">
              <BadgeDollarSign className="h-4 w-4" />
              <Link href="/price">Pricing</Link>
            </li>
            <li className="flex justify-center items-center gap-2">
              <AppWindow className="h-4 w-4" />
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="flex justify-center items-center gap-2">
              <CircleHelp className="h-4 w-4" />
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
