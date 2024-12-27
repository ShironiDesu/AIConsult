import Image from "next/image";
import React from "react";
import "./supportProviding.scss";
import ContactUsBtn from "@/components/contact-btn/contact-us-btn";

export default function SupportProviding() {
  return (
    <div className="support-consult">
      <div className="support-consult__left">
        <h1 className="support-consult__left-title">
          Оказание поддержки <br />
          в получении банковских <br />
          гарантии для <br />
          юридических лиц
        </h1>

        <p className="support-consult__left-description">
          AI Consult ГИД — Кредитование и <br /> Банковские гарантии для
          юридических лиц
        </p>
      </div>

      <ContactUsBtn />
    </div>
  );
}
