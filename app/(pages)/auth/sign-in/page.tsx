import React from "react";
import SignInForm from "./_components/SignInForm";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div>
      <div className="flex flex-row w-full py-16">
        <div className="flex w-2/5 justify-end items-center">
          <SignInForm />
        </div>
        <div className="flex w-3/5 justify-center items-center">
          <div>
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
