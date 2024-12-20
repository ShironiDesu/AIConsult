import React from "react";
import "./startupsGuarantees.scss";
import CardTemplate from "@/componets/cardTemplate/CardTemplate";
import Image from "next/image";

export default function StartupsGuarantees() {

    const cardsInfoArr = [
        {
            title: "Тариф старт",
            price: "250 000₸",
            complianceCriterions: [
                "Сумма: до 10 млн KZT",
                "Малый бизнес, стартапы, индивидуальные предприниматели."
            ],
            advantages: [
                {   imageSrc: "/images/tick-first.png",
                    title: "Консультации:",
                    descriptions: [
                        "— Индивидуальная консультация по вашему запросу.",
                        "— Оценка текущей ситуации и подбор подходящего решения."
                    ],
                },
                {   
                    imageSrc: "/images/tick-second.png",
                    title: "Подготовка пакета документов:**",
                    descriptions: [
                        "— Проверка и сбор необходимых документов.",
                        "— Оформление бумаг в соответствии с требованиями.",
                        "— Рекомендации по корректировке документов, если требуется."
                    ]
                }
            ]
        },
        {
            title: "Тариф базовый",
            price: "400 000₸",
            complianceCriterions: [
                "Сумма: до 10 млн KZT",
                "Малый бизнес, стартапы, индивидуальные предприниматели."
            ],
            advantages: [
                {   imageSrc: "/images/tick-first.png",
                    title: 'Все услуги из "Стартового" пакета.',
                },
                {   
                    imageSrc: "/images/tick-second.png",
                    title: "Взаимодействие с банком:",
                    descriptions: [
                        "— Подача документов в банк.",
                        "— Отслеживание процесса рассмотрения.",
                        "— Ведение переписки с банковскими специалистами."
                    ],
                },
                {   
                    imageSrc: "/images/tick-third.png",
                    title: "Переговоры:",
                    descriptions: [
                        "— Представление ваших интересов на встречах или звонках с банком.",
                        "— Решение вопросов, возникающих в процессе работы.",
                        "— Аргументация вашей позиции для достижения максимально выгодных условий."
                    ]
                }
            ]
        },
        {
            title: "Тариф Основной",
            price: "600 000₸",
            complianceCriterions: [
                "Сумма: до 10 млн KZT",
                "Малый бизнес, стартапы, индивидуальные предприниматели."
            ],
            advantages: [
                {   
                    imageSrc: "/images/tick-first.png",
                    title: 'Все услуги из "Базового" пакета.'
                },
                {   
                    imageSrc: "/images/tick-second.png",
                    title: "Полный цикл сопровождения:",
                    descriptions: [
                        "— Комплексное ведение дела от начала до завершения.",
                        "— Координация всех этапов и взаимодействие с банком, юристами и другими сторонами."
                    ],
                },
                {   
                    imageSrc: "/images/tick-third.png",
                    title: "Юридический анализ:",
                    descriptions: [
                        "— Проверка договора и других юридических документов.",
                        "— Анализ рисков и консультирование по их минимизации.",
                        "— Внесение предложений по улучшению условий соглашений."
                    ]
                }
            ]
        },
    ]

    return (
        <div className="startups-guarantees">
            <h2 className="startups-guarantees__title">
                Гарантии для Стартапов, <br /> Малого бизнеса и ИП
            </h2>
            <div className="startups-guarantees__cards">
                {cardsInfoArr.map((card) => (
                    <CardTemplate key={card.title} isGreen={false} isGray={true}>
                        <>
                            <div className="card-template-gray__top">
                                <h3 className="card-template-gray__top_title">{card.title}</h3>
                                <h3 className="card-template-gray__top_price">{card.price}</h3>
                                <div className="card-template-gray__top_criterions">
                                    <h4 className="card-template-gray__top_criterions_title">критерий соответствия</h4>
                                    {card.complianceCriterions.map((criterion) => (
                                        <p key={criterion} className="card-template-gray__top_criterions_desc">
                                            {criterion}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="card-template-gray__bottom">
                                {card.advantages.map((adv) => (
                                    <div key={adv.title} className="card-template-gray__bottom_advatage">
                                        <div className="card-template-gray__bottom_advatage-top">
                                            <Image
                                                className="card-template-gray__bottom_advatage-top_img"
                                                src={adv.imageSrc}
                                                width={24}
                                                height={24}
                                                alt="advantage tick png"
                                            />
                                            <p className="card-template-gray__bottom_advatage-top_text">
                                                {adv.title}
                                            </p>
                                        </div>
                                        {adv.descriptions?.map(desc => (
                                            <p key={desc} className="card-template-gray__bottom_advatage_text">{desc}</p>
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
                className="startups-guarantees__shine_bg"
                layout="fill"
                alt="startups guarantees second bg png"
            />
        </div>
    );
}
