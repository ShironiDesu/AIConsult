import React from "react";
import CreditProviding from "./creditProviding/CreditProviding";
import WorkListScreen from "./workListScreen/WorkListScreen";
import "./page.scss"

export default function page() {
    return (
        <div className="container before-after-shadow">
          <CreditProviding />
          <WorkListScreen />
        </div>
    );
}
