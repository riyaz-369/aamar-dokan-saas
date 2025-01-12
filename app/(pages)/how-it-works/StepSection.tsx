import React from "react";
import { StepsType } from "./data";

type StepSectionProps = {
  step: StepsType;
  index: number;
};

const StepSection: React.FC<StepSectionProps> = ({ step, index }) => {
  return (
    <div
      id={step.id}
      className={`flex flex-col ${
        index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
      } items-center border-b py-24`}
    >
      <div className="md:w-1/2 w-auto px-4">
        <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100 mb-4">
          {step.title}
        </h2>
        <ul className="text-lg text-slate-700 dark:text-slate-100 mb-6 list-disc list-inside space-y-3">
          {step.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 w-auto px-4">
        <iframe
          width="560"
          height="315"
          src={step.video}
          title={`Step ${index + 1} video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default StepSection;
