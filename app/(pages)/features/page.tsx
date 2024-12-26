import React from "react";
import BusinessPlatform from "../_components/BusinessPlatform";
import Features from "./_components/Features";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen py-8 px-4 md:px-12 container">
      <BusinessPlatform />
      <Features />
    </div>
  );
};

export default FeaturesPage;
