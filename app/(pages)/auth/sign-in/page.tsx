import React from "react";
import SignInForm from "./_components/SignInForm";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full py-8 md:py-16">
        <div className="flex w-full md:w-2/5 md:justify-end justify-center items-center">
          <SignInForm />
        </div>
        <div className="flex w-full md:w-3/5 justify-center items-center">
          <div className="hidden md:block">
            <Image
              className=""
              src="/aamar-dokan-sign-up.svg"
              alt="Aamar Dokan"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
