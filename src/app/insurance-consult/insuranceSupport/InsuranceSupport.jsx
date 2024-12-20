import Image from "next/image";
import React from "react";
import "./insuranceSupport.scss";
import SmallCardTemplate from "@/componets/smallCardTemplate/SmallCardTemplate";

export default function InsuranceSupport() {
    const firtColumnDataArr = [
        {
            title: "<span>Страхование имущества.</span> для защиты небольших активов.",
            imgSrc: "/images/small-card-img1.png",
        },
        {
            title: "<span>Страхование ответственности.</span> для уменьшения рисков перед клиентами.",
            imgSrc: "/images/small-card-img2.png",
        },
        {
            title: "<span>Страхование автопарка.</span> для защиты транспортных средств.",
            imgSrc: "/images/small-card-img3.png",
        },
        {
            title: "<span>Страхование ответственности за убытки.</span> для защиты от значительных потерь.",
            imgSrc: "/images/small-card-img4.png",
        },
    ];

    const secondColumnDataArr = [
        {
            title: "<span>Страхование ответственности работодателя.</span> для защиты прав работников.",
            imgSrc: "/images/small-card-img5.png",
        },
        {
            title: "<span>Страхование здоровья.</span> для сотрудников компании.",
            imgSrc: "/images/small-card-img6.png",
        },
        {
            title: "<span>Страхование бизнеса.</span> для защиты всех рисков компании.",
            imgSrc: "/images/small-card-img7.png",
        },
        {
            title: "<span>Страхование строительно-монтажных рисков.</span> для крупных строительных проектов.",
            imgSrc: "/images/small-card-img8.png",
        },
    ];

    const thirdColumnDataArr = [
        {
            title: "<span>Страхование каско.</span> для защиты автомобилей бизнеса.",
            imgSrc: "/images/small-card-img9.png",
        },
        {
            title: "<span>Страхование профессиональной ответственности.</span> для специалистов и подрядчиков.",
            imgSrc: "/images/small-card-img10.png",
        },
        {
            title: "<span>Страхование международных грузов.</span> для защиты доставки товаров.",
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
                    <button className="insurance-support__btn">
                        Связаться с нами
                        <Image
                            className="insurance-support__btn-vector"
                            src="/images/credit_screen_btn-vector.png"
                            width={9}
                            height={11}
                            alt="insurance support btn vector png"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}