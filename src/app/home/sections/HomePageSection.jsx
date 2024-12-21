"use client";
import React from "react";
import HomeCard from "../components/home-card/HomeCard";
import "./HomePageSections.scss";
export default function HomePageSection() {
  const homeData = [
    {
      img: "/images/HomeIcon1.svg",
      whiteText: "Налоговый консалтинг",
      grayText:
        "Оказание поддержки в получении кредитных продуктов для юридических лиц",
      classname: "consulting-card",
      link: "/tax-consulting",
    },
    {
      img: "/images/HomeIcon2.svg",
      whiteText:
        "Оказание поддержки в получении банковских гарантии для юридических лиц",
      grayText:
        "Оказание поддержки в получении кредитных продуктов для юридических лиц",
      classname: "guarantee-card",
      link: "/insurance-consult",
    },
    {
      img: "/images/HomeIcon3.svg",
      whiteText: "Оказание поддержки в получении страховки для юридических лиц",
      grayText:
        "Оказание поддержки в получении кредитных продуктов для юридических лиц",
      classname: "insurance-card",
      link: "/support-consult",
    },
    {
      img: "/images/HomeIcon4.svg",
      whiteText:
        "Оказание поддержки в получении кредитных продуктов для юридических лиц",
      grayText: "Оказание поддержки в получении кредитных продуктов",
      classname: "credit-card",
      link: "/credit-consult",
    },
    {
      img: "/images/HomeIcon5.svg",
      whiteText: "Юридический консалтинг",
      grayText:
        "Оказание поддержки в получении кредитных продуктов для юридических лиц",
      classname: "legal-card",
      link: "/legal-consulting",
    },
    {
      img: "/images/HomeIcon6.svg",
      whiteText: "Бухгалтерский консалтинг",
      grayText:
        "Оказание поддержки в получении кредитных продуктов для юридических лиц",
      classname: "accounting-card",
      link: "/accounting-consulting",
    },
  ];

  return (
    <div className="homepage__section">
      <h1>
        Оказание поддержки в получении кредитных продуктов для юридических лиц
      </h1>
      <h5>
        AI Consult ГИД — Кредитование и Банковские
        <br /> гарантии для юридических лиц
      </h5>
      {homeData.map((data, index) => (
        <HomeCard
          key={index}
          img={data.img}
          whiteText={data.whiteText}
          grayText={data.grayText}
          classname={data.classname}
          link={data.link}
        />
      ))}
    </div>
  );
}
