"use client";
import Image from "next/image";
import "./HomeCard.scss";
export default function HomeCard() {
  return (
    <div className="homepage__card">
      <Image src={"./next.svg"} width={86} height={77} alt="Логотип" />
      <p className="homepage__card__white-text">Налоговый консалтинг</p>
      <p className="homepage__card__gray-text">
        Оказание поддержки в получении кредитных продуктов для юридических лиц
      </p>
    </div>
  );
}
