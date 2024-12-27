import Image from "next/image";
import React from "react";
import "./insuranceSupport.scss";
import SmallCardTemplate from "@/components/smallCardTemplate/SmallCardTemplate";
import ContactUsBtn from "@/components/contact-btn/contact-us-btn";

export default function InsuranceSupport() {
  const firtColumnDataArr = [
    {
      smallHeight: false,
      title:
        "<span>Страхование имущества.</span> для защиты небольших активов.",
      imgSrc: "/images/small-card-img1.png",
    },
    {
      smallHeight: false,
      title:
        "<span>Страхование ответственности.</span> для уменьшения рисков перед клиентами.",
      imgSrc: "/images/small-card-img2.png",
    },
    {
      smallHeight: false,
      title:
        "<span>Страхование автопарка.</span> для защиты транспортных средств.",
      imgSrc: "/images/small-card-img3.png",
    },
    {
      smallHeight: false,
      title:
        "<span>Страхование ответственности за убытки.</span> для защиты от значительных потерь.",
      imgSrc: "/images/small-card-img4.png",
    },
  ];

  const secondColumnDataArr = [
    {
      smallHeight: false,
      title:
        "<span>Страхование ответственности работодателя.</span> для защиты прав работников.",
      imgSrc: "/images/small-card-img5.png",
    },
    {
      smallHeight: false,
      title: "<span>Страхование здоровья.</span> для сотрудников компании.",
      imgSrc: "/images/small-card-img6.png",
    },
    {
      smallHeight: false,
      title:
        "<span>Страхование бизнеса.</span> для защиты всех рисков компании.",
      imgSrc: "/images/small-card-img7.png",
    },
    {
      smallHeight: false,
      title:
        "<span>Страхование строительно-монтажных рисков.</span> для крупных строительных проектов.",
      imgSrc: "/images/small-card-img8.png",
    },
  ];

  const thirdColumnDataArr = [
    {
      smallHeight: false,
      title: "<span>Страхование каско.</span> для защиты автомобилей бизнеса.",
      imgSrc: "/images/small-card-img9.png",
    },
    {
      smallHeight: false,
      title:
        "<span>Страхование профессиональной ответственности.</span> для специалистов и подрядчиков.",
      imgSrc: "/images/small-card-img10.png",
    },
    {
      smallHeight: true,
      title:
        "<span>Страхование международных грузов.</span> для защиты доставки товаров.",
      imgSrc: "/images/small-card-img11.png",
    },
  ];

  return (
    <div className="insurance-support">
      <h1 className="insurance-support__title">
        Оказание поддержки в <br />
        получении страховки для <br />
        юридических лиц
      </h1>
      <div className="insurance-support__main">
        <div className="insurance-support__main-column">
          {firtColumnDataArr.map((card) => (
            <SmallCardTemplate key={card.title} card={card} />
          ))}
        </div>
        <div className="insurance-support__main-column">
          {secondColumnDataArr.map((card) => (
            <SmallCardTemplate key={card.title} card={card} />
          ))}
        </div>
        <div className="insurance-support__main-column__third">
          <div className="insurance-support__main-column">
            {thirdColumnDataArr.map((card) => (
              <SmallCardTemplate key={card.title} card={card} />
            ))}
          </div>
          <ContactUsBtn />
        </div>
      </div>
    </div>
  );
}
