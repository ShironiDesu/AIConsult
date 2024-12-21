"use client";
import Image from "next/image";
import "./HomeCard.scss";
import Link from "next/link";
export default function HomeCard({
  img,
  whiteText,
  grayText,
  classname,
  link,
}) {
  return (
    <Link className={`homepage__card ${classname}`} href={link}>
      <Image src={img} width={60} height={60} alt={whiteText} />
      <p className="homepage__card__white-text">{whiteText}</p>
      <p className="homepage__card__gray-text">{grayText}</p>
    </Link>
  );
}
