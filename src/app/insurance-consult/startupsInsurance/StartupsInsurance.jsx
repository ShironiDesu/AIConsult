import React from "react";
import CardTemplate from "@/componets/cardTemplate/CardTemplate";
import Image from "next/image";
import "./startupsInsurance.scss"
import BlackAdvantagesTemplate from "@/componets/blackAdvantagesTemplate/BlackAdvantagesTemplate";

export default function StartupsInsurance() {

    const cardsInfoArr = [
        {
            title: "Тариф старт",
            price: "50 000₸",
            complianceCriterions: [
                "Сумма: от 2 до 10 млн KZT",
                "Целевая аудитория: компании среднего бизнеса,",
                "активные участники рынка."
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
            price: "80 000₸",
            complianceCriterions: [
                "Сумма: от 2 до 10 млн KZT",
                "Целевая аудитория: компании среднего бизнеса,",
                "активные участники рынка."
            ],
            advantages: [
                {
                    imageSrc: "/images/tick-first.png",
                    title: 'Все услуги из "Стартового" пакета.',
                },
                {
                    imageSrc: "/images/tick-second.png",
                    title: "Взаимодействие со страховой:",
                    descriptions: [
                        "— Подача документов в банк.",
                        "— Отслеживание процесса рассмотрения.",
                        "— Ведение переписки со страховыми специалистами.",
                    ],
                },
                {
                    imageSrc: "/images/tick-third.png",
                    title: "Переговоры:",
                    descriptions: [
                        "— Представление ваших интересов на встречах или звонках со страховой",
                        "— Решение вопросов, возникающих в процессе работы.",
                        "— Аргументация вашей позиции для достижения максимально выгодных условий.",
                    ],
                },
            ],
        },
        {
            title: "Тариф Основной",
            price: "<span class='price-litte'>от</span> 120 000₸",
            complianceCriterions: [
                "Сумма: от 2 до 10 млн KZT",
                "Целевая аудитория: компании среднего бизнеса,",
                "активные участники рынка."
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
                        "— Координация всех этапов и взаимодействие со страховой, юристами и другими сторонами.",
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

    const descBlackTemplate = [
        "Упрощённые условия страхования",
        "Быстрое оформление (1-3 дня)",
        "Минимальные документы"
    ]

    return (
        <div className="startups-insurance">
            <h2 className="startups-insurance__title">
                Страхование для Стартапов, <br /> 
                Малого бизнеса и ИП
            </h2>

            <BlackAdvantagesTemplate isThicker={true} infos={descBlackTemplate}/>

            <div className="startups-insurance__cards">
                {cardsInfoArr.map((card) => (
                    <CardTemplate key={card.title} isFixHeight={true} isGreen={false} isGray={false}>
                        <>
                            <div className="card-template__top">
                                <h3 className="card-template__top_title">{card.title}</h3>
                                <h3
                                    className="card-template__top_price"
                                    dangerouslySetInnerHTML={{ __html: card.price }}
                                />
                                <h4 className="card-template__top_criterions_title">критерий соответствия</h4>
                                <div className="card-template__top_criterions">
                                    {card.complianceCriterions.map((criterion) => (
                                        <p
                                            key={criterion}
                                            className="card-template__top_criterions_desc"
                                            dangerouslySetInnerHTML={{ __html: criterion }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="card-template__bottom">
                                <h4 className="card-template__top_criterions_title">
                                    Что входит в перечень <br />
                                    работ по каждой категории <br />
                                    услуг страховой гарантии:
                                </h4>
                                {card.advantages.map((adv, index) => (
                                    <div key={adv.title + index} className="card-template__bottom_advatage-column">
                                        <div className="card-template__bottom_advatage-column__top">
                                            <Image
                                                className="card-template__bottom_advatage-column__top_img"
                                                src={adv.imageSrc}
                                                width={24}
                                                height={24}
                                                alt="advantage tick png"
                                            />
                                            <p className="card-template__bottom_advatage-column__top_text">{adv.title}</p>
                                        </div>
                                        {adv.descriptions?.map((desc) => (
                                            <p key={desc} className="card-template__bottom_advatage-column_text">
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

            <Image
                src="/images/credit-screen-second-bg.png"
                className="startups-insurance__shine_bg"
                layout="fill"
                alt="startups insurance fourth bg png"
            />
        </div>
    );
}
