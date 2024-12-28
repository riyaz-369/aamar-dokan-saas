import React from "react";
import FeaturesHero from "./_components/FeaturesHero";
import PointOfSale from "./_components/PointOfSale";
import Procurement from "./_components/Procurement";
import WarehouseManagement from "./_components/WarehouseManagement";
import DamageManagement from "./_components/DamageManagement";
import StockManagement from "./_components/StockManagement";
import Accounts from "./_components/Accounts";
import ReportingAndAnalytics from "./_components/ReportingAndAnalytics";
import DataBackup from "./_components/DataBackup";
import ECommerceIntegration from "./_components/ECommerceIntegration";
import MobileReportingApp from "./_components/MobileReportingApp";
import Notifications from "./_components/Notifications";
import VatAndTax from "./_components/VatAndTax";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen space-y-12">
      <FeaturesHero />
      <PointOfSale />
      <WarehouseManagement />
      <Procurement />
      <DamageManagement />
      <StockManagement />
      <Accounts />
      <ReportingAndAnalytics />
      <DataBackup />
      <ECommerceIntegration />
      <MobileReportingApp />
      <Notifications />
      <VatAndTax />
    </div>
  );
};

export default FeaturesPage;
