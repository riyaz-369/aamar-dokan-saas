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
