import React from "react";
import "./tariffsLargeBusinesses.scss";
import CardTemplate from "@/componets/cardTemplate/CardTemplate";
import Image from "next/image";

export default function TariffsLargeBusinesses() {
    const cardsInfoArr = [
        {
            changedHeight: false,
            title: "Тариф Премиум",
            price: "2 250 000₸",
            descriptions: [
                "Количество залоговых имуществ: до 30-ти <br/> объектов;",
                "Максимальная сумма подачи кредита: от 500 <br/> млн до 750 млн KZT.s",
                "Годовой оборот компании не должен <br/> превышать 5 млрд KZT.",
            ],
            advantages: [
                "Проверка перечня документов <br/> необходимых для подачи заявки;",
                "Предоставление рекомендации после <br/> проверки документов;",
                "Подбор оптимального кредитного продукта <br/> для Вашей задачи.",
                "Персональный менеджер",
                "Консультация на каждом этапе и <br/> содействие",
                "+ Бонус проверка документов до 5-х раз <br/> после корректировки документов.",
            ],
        },
        {
            changedHeight: false,
            title: "Тариф Экстра",
            price: "3 000 000₸",
            descriptions: [
                "Количество залоговых имуществ: до 40-ка объектов;",
                "Максимальная сумма подачи кредита: от 750 млн до 1 млрд KZT.",
                "Годовой оборот компании не должен <br/> превышать 5 млрд KZT.",
            ],
            advantages: [
                "Проверка перечня документов необходимых для подачи заявки;",
                "Предоставление рекомендации после проверки документов;",
                "Подбор оптимального кредитного продукта для Вашей задачи.",
                "Персональный менеджер",
                "Консультация на каждом этапе и содействие",
                "+ Бонус проверка документов до 6-х раз после корректировки документов.",
            ],
        },
        {
            changedHeight: true,
            title: "Тариф Индивидуальный",
            price: "<span class='price-litte'>от</span> 3 000 000₸",
            descriptions: [
                "Количество залоговых имуществ: без ограничении;",
                "Максимальная сумма подачи кредита: от <br/> 1 млрд KZT.",
                "Годовой оборот компании без ограничении.",
            ],
            advantages: [
                "Индивидуально, полное сопровождение <br/> под ключ",
            ],
        },
    ];
    
    return (
        <div className="tariffs-large">
            <h2 className="tariffs-large__title">
                Тарифы для Крупного и <br /> масштабного бизнеса:
            </h2>
            <div className="tariffs-large__cards">
                {cardsInfoArr.map((card) => (
                    <CardTemplate key={card.title} isChangedHeight={card.changedHeight} isGreen={true} isGray={false}>
                        <>
                            <div className="card-template-green__top">
                                <h3 className="card-template-green__top_title">{card.title}</h3>
                                <h3 className="card-template-green__top_price" dangerouslySetInnerHTML={{ __html: card.price }}/>
                                <div className="card-template-green__top_list">
                                    {card.descriptions.map((desc) => (
                                        <p key={desc} dangerouslySetInnerHTML={{ __html: desc }} className="card-template__top_list_desc"/>
                                    ))}
                                </div>
                            </div>
                            <div className="card-template-green__bottom">
                                {card.advantages.map((adv) => (
                                    <div key={adv} className="card-template-green__bottom_advatage">
                                        <Image
                                            className="card-template-green__bottom_advatage_img"
                                            src="/images/advantage_tick.png"
                                            width={24}
                                            height={24}
                                            alt="advantage tick png"
                                        />
                                        <p key={adv} dangerouslySetInnerHTML={{ __html: adv }} className="card-template-green__bottom_advatage_text"/>
                                    </div>
                                ))}
                            </div>
                        </>
                    </CardTemplate>
                ))}
            </div>
        </div>
    );
}
