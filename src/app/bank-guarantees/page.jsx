import React from "react";
import "./page.scss";
import SupportProviding from "./supportProviding/SupportProviding";
import StartupsGuarantees from "./startupsGuarantees/StartupsGuarantees";
import TenderParticipant from "./tenderParticipants/TenderParticipants";
import LargeScaleBusinesses from "./largeScaleBusinesses/LargeScaleBusinesses";
import InternationalСompanies from "./internationalСompanies/InternationalСompanies";
import Footer from "@/components/footer/Footer";

export default function page() {
  return (
    <div className="container before-after-shadow second-page-bg">
      <SupportProviding />
      <StartupsGuarantees />
      <TenderParticipant />
      <LargeScaleBusinesses />
      <InternationalСompanies />
      <Footer />
      <div className="smooth-transition"></div>
    </div>
  );
}
