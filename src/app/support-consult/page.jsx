import React from "react";
import "./page.scss"
import SupportProviding from "./supportProviding/SupportProviding";
import StartupsGuarantees from "./startupsGuarantees/StartupsGuarantees";
import TenderParticipant from "./tenderParticipants/TenderParticipants";
import LargeScaleBusinesses from "./largeScaleBusinesses/LargeScaleBusinesses";
import InternationalСompanies from "./internationalСompanies/InternationalСompanies";


export default function page() {
    return (
        <div className="container before-after-shadow">
            <SupportProviding/>
            <StartupsGuarantees/>
            <TenderParticipant/>
            <LargeScaleBusinesses/>
            <InternationalСompanies/>
        </div>
    );
}
