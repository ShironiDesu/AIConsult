import React from "react";
import "./internationalСompanies.scss";
import Image from "next/image";
import CardTemplate from "@/componets/cardTemplate/CardTemplate";

export default function InternationalСompanies() {
    const cardsInfoArr = [
        {
            title: "Тариф старт",
            price: "1 000 000₸",
            complianceCriterions: [
                "от 100 до 500 млн KZT и свыше 500 млн",
                "Крупный бизнес, подрядчики госзаказов,",
                "участники международных проектов.",
            ],
            advantages: [
                {
                    imageSrc: "/images/tick-first.png",
                    title: "Консультации:",
                    descriptions: [
                        "— Индивидуальная консультация по вашему запросу.",
                        "— Оценка текущей ситуации и подбор подходящего решения.",
                    ],
                },
                {
                    imageSrc: "/images/tick-second.png",
                    title: "Подготовка пакета документов:",
                    descriptions: [
                        "— Проверка и сбор необходимых документов.",
                        "— Оформление бумаг в соответствии с требованиями.",
                        "— Рекомендации по корректировке документов, если требуется.",
                    ],
                },
            ],
        },
        {
            title: "Тариф базовый",
            price: "2 000 000₸",
            complianceCriterions: [
                "от 100 до 500 млн KZT и свыше 500 млн",
                "Крупный бизнес, подрядчики госзаказов,",
                "участники международных проектов.",
            ],
            advantages: [
                {
                    imageSrc: "/images/tick-first.png",
                    title: 'Все услуги из "Стартового" пакета.',
                },
                {
                    imageSrc: "/images/tick-second.png",
                    title: "Взаимодействие с банком:",
                    descriptions: [
                        "— Подача документов в банк.",
                        "— Отслеживание процесса рассмотрения.",
                        "— Ведение переписки с банковскими специалистами.",
                    ],
                },
                {
                    imageSrc: "/images/tick-third.png",
                    title: "Переговоры:",
                    descriptions: [
                        "— Представление ваших интересов на встречах или звонках с банком.",
                        "— Решение вопросов, возникающих в процессе работы.",
                        "— Аргументация вашей позиции для достижения максимально выгодных условий.",
                    ],
                },
            ],
        },
        {
            title: "Тариф Основной",
            price: "<span class='price-litte'>от</span> 2 500 000₸",
            complianceCriterions: [
                "от 100 до 500 млн KZT и свыше 500 млн",
                "Крупный бизнес, подрядчики госзаказов,",
                "участники международных проектов.",
            ],
            advantages: [
                {
                    imageSrc: "/images/tick-first.png",
                    title: 'Все услуги из "Базового" пакета.',
                },
                {
                    imageSrc: "/images/tick-second.png",
                    title: "Полный цикл сопровождения:",
                    descriptions: [
                        "— Комплексное ведение дела от начала до завершения.",
                        "— Координация всех этапов и взаимодействие с банком, юристами и другими сторонами.",
                    ],
                },
                {
                    imageSrc: "/images/tick-third.png",
                    title: "Юридический анализ:",
                    descriptions: [
                        "— Проверка договора и других юридических документов.",
                        "— Анализ рисков и консультирование по их минимизации.",
                        "— Внесение предложений по улучшению условий соглашений.",
                    ],
                },
            ],
        },
    ];

    return (
        <div className="international-companies">
            <h2 className="international-companies__title">
                Гарантии для Крупного <br /> и масштабного бизнеса
            </h2>
            <div className="international-companies__cards">
                {cardsInfoArr.map((card) => (
                    <CardTemplate key={card.title} isGreen={false} isGray={true}>
                        <>
                            <div className="card-template-gray__top">
                                <h3 className="card-template-gray__top_title">{card.title}</h3>
                                <h3
                                    className="card-template-gray__top_price"
                                    dangerouslySetInnerHTML={{ __html: card.price }}
                                />
                                <h4 className="card-template-gray__top_criterions_title">критерий соответствия</h4>
                                <div className="card-template-gray__top_criterions">
                                    {card.complianceCriterions.map((criterion) => (
                                        <p
                                            key={criterion}
                                            className="card-template-gray__top_criterions_desc"
                                            dangerouslySetInnerHTML={{ __html: criterion }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="card-template-gray__bottom">
                                {card.advantages.map((adv, index) => (
                                    <div key={adv.title + index} className="card-template-gray__bottom_advatage">
                                        <div className="card-template-gray__bottom_advatage-top">
                                            <Image
                                                className="card-template-gray__bottom_advatage-top_img"
                                                src={adv.imageSrc}
                                                width={24}
                                                height={24}
                                                alt="advantage tick png"
                                            />
                                            <p className="card-template-gray__bottom_advatage-top_text">{adv.title}</p>
                                        </div>
                                        {adv.descriptions?.map((desc) => (
                                            <p key={desc} className="card-template-gray__bottom_advatage_text">
                                                {desc}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </>
                    </CardTemplate>
                ))}
            </div>

            {/* <Image
                src="/images/credit-screen-second-bg.png"
                className="international-companies__shine_bg"
                layout="fill"
                alt="international companies fifth bg png"
            /> */}
        </div>
    );
}
