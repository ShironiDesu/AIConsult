"use client";
import Image from "next/image";
import React from "react";
import "./creditProviding.scss";
import ContactUsBtn from "@/components/contact-btn/contact-us-btn";

export default function CreditProviding() {
  return (
    <div className="credit-consult">
      <div className="credit-consult__left">
        <h1 className="credit-consult__left-title">
          Оказание поддержки <br />
          в получении кредитных <br />
          продуктов для <br />
          юридических лиц
        </h1>

        <p className="credit-consult__left-description">
          AI Consult ГИД — Кредитование и <br /> Банковские гарантии для
          юридических лиц
        </p>
      </div>

      <ContactUsBtn />
    </div>
  );
}
