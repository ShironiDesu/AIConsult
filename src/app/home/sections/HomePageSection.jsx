"use client";
import React from "react";
import HomeCard from "../components/home-card/HomeCard";
import "./HomePageSections.scss";
export default function HomePageSection() {
  const homeData = [{ img: "", graytext: "" }];
  return (
    <div className="homepage__section">
      <HomeCard />
      <h1>
        Оказание поддержки в получении кредитных продуктов для юридических лиц
      </h1>
      <HomeCard />

      <HomeCard />

      <h5>
        AI Consult ГИД — Кредитование и Банковские
        <br /> гарантии для юридических лиц
      </h5>
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </div>
  );
}
