import React from "react";
import CreditProviding from "./creditProviding/CreditProviding";
import WorkListScreen from "./workListScreen/WorkListScreen";
import "./page.scss"
import TariffsMediumBusinesses from "./tariffsMediumBusinesses/TariffsMediumBusinesses";
import TariffsLargeBusinesses from "./tariffsLargeBusinesses/TariffsLargeBusinesses";
import Footer from "@/componets/footer/Footer";

export default function page() {
    return (
        <div className="container before-after-shadow first-page-bg">
          <CreditProviding />
          <WorkListScreen />
          <TariffsMediumBusinesses/>
          <TariffsLargeBusinesses/>
          <Footer/>
        </div>
    );
}
