"use client";
import React from "react";
import "./LegalCard.scss";
import Image from "next/image";
export default function LegalCard({ data }) {
  return (
    <div className="consulting__card">
      <div className="consulting__card__description">
        <div className="consulting__card__description__title">
          <Image width={22} height={22} src={data.img} alt={data.whiteText} />
          <h3 dangerouslySetInnerHTML={{ __html: data.whiteText }}></h3>
        </div>
        <p>{data.grayText}</p>
      </div>
    </div>
  );
}
