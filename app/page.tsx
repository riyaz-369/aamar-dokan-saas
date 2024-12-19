import Header from "./(pages)/_components/Header";
import Footer from "./(pages)/_components/Footer";
import Banner from "./(pages)/_components/Banner";
import BusinessPlatform from "./(pages)/_components/BusinessPlatform";
import WhyChooseUs from "./(pages)/_components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex-col gap-8 row-start-2 items-center sm:items-start ">
      <Header />
      <main className="w-full min-h-96 flex-1 flex-col flex justify-center items-center">
        <Banner />
        <BusinessPlatform />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

{
  /* <div className="flex w-full px-16 justify-center items-end gap-x-8 py-40 space-x-4">
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
        </div> */
}
