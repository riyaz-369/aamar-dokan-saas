import { AiOutlineAim, AiOutlineAppstore, AiOutlineStar } from "react-icons/ai";

export default function AboutUs() {
  return (
    <section>
      <div className="relative bg-no-repeat bg-cover bg-center w-full h-96 flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-t dark:from-black to-transparent" />
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg leading-relaxed drop-shadow-md">
            At Teachsoul, we are dedicated to leveraging the power of AI to
            drive innovation and create meaningful solutions for businesses
            around the world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-0 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-48 w-full max-w-6xl">
          <div className="text-center flex flex-col items-center space-y-6 border-b-2 md:border-b-0 border-r-0 md:border-r-2 lg:border-r border-gray-200 py-4 px-8">
            <AiOutlineAim size={150} className="text-primary" />
            <h2 className="text-3xl font-bold ">Our Mission</h2>
            <p className="leading-relaxed">
              Our mission is to empower businesses with cutting-edge AI
              technologies that enable them to automate tasks, gain deeper
              insights, and enhance their productivity. We believe in harnessing
              the potential of AI to create intelligent solutions that transform
              industries.
            </p>
          </div>

          <div className="text-center flex flex-col items-center space-y-6 border-b-2 lg:border-b-0 border-r-0 lg:border-r-2 border-gray-200 py-4 px-8">
            <AiOutlineStar size={150} className="" />
            <h2 className="text-3xl font-bold ">Our Vision</h2>
            <p className="leading-relaxed">
              We envision a world where AI seamlessly integrates into business
              processes, enhancing efficiency and providing deep insights. Our
              goal is to lead this transformation across industries, helping
              companies innovate and thrive.
            </p>
          </div>

          <div className="text-center flex flex-col items-center space-y-6 py-4 px-8">
            <AiOutlineAppstore size={150} className="text-primary" />
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="leading-relaxed">
              We value integrity, innovation, and collaboration. Our team
              believes in building trust with our clients and delivering
              impactful solutions that create long-lasting value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
