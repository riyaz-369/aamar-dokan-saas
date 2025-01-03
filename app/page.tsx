import Header from "./(pages)/_components/Header";
import Footer from "./(pages)/_components/Footer";
import Banner from "./(pages)/_components/Banner";
import BusinessPlatform from "./(pages)/_components/BusinessPlatform";
import WhyChooseUs from "./(pages)/_components/WhyChooseUs";
import Testimonials from "./(pages)/_components/Testimonials";
import TawkMessage from "./(pages)/_components/Tawk";
// import { sendGAEvent } from '@next/third-parties/google'
// import { Button } from "@/components/ui/button";
 

export default function Home() {
  return (
    <div className="flex-col gap-8 row-start-2 items-center sm:items-start ">
      <Header />
      <main className="w-full min-h-96 flex-1 flex-col flex justify-center items-center">
        <Banner />
        <BusinessPlatform />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <TawkMessage/>

      <Footer />
    </div>
  );
}
