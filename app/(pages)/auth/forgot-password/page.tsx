"use client";
import { useState } from "react";
import VerificationForm from "./_components/VerificationForm";
import PasswordForm from "./_components/PasswordForm";
import Image from "next/image";
import { cn } from "@/lib/utils";
import PhoneForm from "./_components/PhoneForm";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [pin, setPin] = useState("");
  const [id, setId] = useState("");

  // console.log(step, pin, id);
  const StepOne = () => {
    return <PhoneForm setStep={setStep} setPin={setPin} setId={setId} />;
  };
  const StepTwo = () => {
    return <VerificationForm setStep={setStep} id={id} pin={pin} />;
  };
  const StepThree = () => {
    return <PasswordForm id={id} />;
  };

  const getStep = (step: number): React.ReactNode => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return <StepOne />;
    }
  };
  const getImage = (step: number): React.ReactNode => {
    switch (step) {
      case 1:
        return (
          <Image
            className=""
            src="/aamar-dokan-sign-up.svg"
            alt="Aamar Dokan"
            width={500}
            height={500}
            priority
          />
        );
      case 2:
        return (
          <Image
            className=""
            src="/aamar-dokan-verification.svg"
            alt="Aamar Dokan"
            width={500}
            height={500}
            priority
          />
        );
      case 3:
        return (
          <Image
            className=""
            src="/aamar-dokan-personal-info.svg"
            alt="Aamar Dokan"
            width={500}
            height={500}
            priority
          />
        );

      default:
        return (
          <Image
            className=""
            src="/aamar-dokan-sign-up.svg"
            alt="Aamar Dokan"
            width={500}
            height={500}
            priority
          />
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full py-8 md:py-16">
      <div className="flex w-full md:w-2/5 justify-center md:justify-end items-center">
        {getStep(step)}
      </div>
      <div className="flex w-full md:w-3/5 justify-center items-center">
        <div>
          <div className="hidden md:block">{getImage(step)}</div>
          <div className="w-full flex-col flex justify-center items-center">
            {/* <h2 className="text-lg font-semibold pb-3">Create Account</h2> */}
            <div className="flex gap-4 pt-4">
              <div
                className={cn(
                  "h-3 w-10 bg-gray-100 rounded-xl",
                  step === 1 && "bg-primary",
                )}
              />
              <div
                className={cn(
                  "h-3 w-10 bg-gray-100 rounded-xl",
                  step === 2 && "bg-primary",
                )}
              />
              <div
                className={cn(
                  "h-3 w-10 bg-gray-100 rounded-xl",
                  step === 3 && "bg-primary",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

// sign up
// otp
// personal info
// business info ***
