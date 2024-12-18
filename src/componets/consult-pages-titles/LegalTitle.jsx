"use client";
import React from "react";
import "./LegalTitle.scss";
import Image from "next/image";
export default function LegalTitle({ data }) {
  return (
    <div
      className="consult__container
  "
    >
      <div className="consult__img">
        <Image width={85} height={85} src={data.img} alt={data.h1} />
      </div>
      <h1>{data.h1}</h1>
      <p>{data.p}</p>
    </div>
  );
}
