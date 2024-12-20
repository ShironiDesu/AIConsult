import React from "react";
import "./page.scss"
import InsuranceSupport from "./insuranceSupport/InsuranceSupport";
import StartupsInsurance from "./startupsInsurance/StartupsInsurance";
import InsuranceTenderers from "./insuranceTenderers/InsuranceTenderers.jsx"
import InsuranceLargeBusinesses from "./insuranceLargeBusinesses/InsuranceLargeBusinesses";
import InsuranceInternational from "./insuranceInternational/InsuranceInternational";

export default function page() {
    return (
        <div className="container before-after-shadow">
            <InsuranceSupport/>
            <StartupsInsurance/>
            <InsuranceTenderers/>
            <InsuranceLargeBusinesses/>
            <InsuranceInternational/>
        </div>
    );
}
