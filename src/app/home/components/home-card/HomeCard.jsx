"use client";
import Image from "next/image";
import "./HomeCard.scss";
export default function HomeCard({ img, whiteText, grayText, classname }) {
  return (
    <div className={`homepage__card ${classname}`}>
      <Image src={img} width={60} height={60} alt={whiteText} />
      <p className="homepage__card__white-text">{whiteText}</p>
      <p className="homepage__card__gray-text">{grayText}</p>
    </div>
  );
}
