import React from "react";
import "./page.scss"
import InsuranceSupport from "./insuranceSupport/InsuranceSupport";
import StartupsInsurance from "./startupsInsurance/StartupsInsurance";
import InsuranceTenderers from "./insuranceTenderers/InsuranceTenderers.jsx"
import InsuranceLargeBusinesses from "./insuranceLargeBusinesses/InsuranceLargeBusinesses";
import InsuranceInternational from "./insuranceInternational/InsuranceInternational";
import Footer from "@/componets/footer/Footer";

export default function page() {
    return (
        <div className="container before-after-shadow third-page-bg">
            <InsuranceSupport/>
            <StartupsInsurance/>
            <InsuranceTenderers/>
            <InsuranceLargeBusinesses/>
            <InsuranceInternational/>
            <Footer/>
            <div className="smooth-transition"></div>
        </div>
    );
}
