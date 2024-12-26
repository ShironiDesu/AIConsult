import React from "react";
import "./InsuranceLargeBusinesses.scss";
import CardTemplate from "@/componets/cardTemplate/CardTemplate";
import BlackAdvantagesTemplate from "@/componets/blackAdvantagesTemplate/BlackAdvantagesTemplate";
import Image from "next/image";

export default function InsuranceLargeBusinesses() {
    const cardsInfoArr = [
        {   
            title: "Тариф старт",
            price: "250 000₸",
            complianceCriterions: [
                "Сумма: от 10 до 50 млн KZT",
                "Целевая аудитория: крупные компании,",
                "участники международных сделок.",
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
            price: "350 000₸",
            complianceCriterions: [
                "Сумма: от 10 до 50 млн KZT",
                "Целевая аудитория: крупные компании,",
                "участники международных сделок.",
            ],
            advantages: [
                {
                    imageSrc: "/images/tick-first.png",
                    title: 'Все услуги из "Стартового" пакета.',
                },
                {
                    imageSrc: "/images/tick-second.png",
                    title: "Взаимодействие со страховой:",
                    descriptions: ["— Подача документов в банк.", "— Отслеживание процесса рассмотрения.", "— Ведение переписки со страховыми специалистами."],
                },
                {
                    imageSrc: "/images/tick-third.png",
                    title: "Переговоры:",
                    descriptions: [
                        "— Представление ваших интересов на встречах или звонках со страховой.",
                        "— Решение вопросов, возникающих в процессе работы.",
                        "— Аргументация вашей позиции для достижения максимально выгодных условий.",
                    ],
                },
            ],
        },
        {   
            title: "Тариф Основной",
            price: "<span class='price-litte'>от</span> 650 000₸",
            complianceCriterions: [
                "Сумма: от 10 до 50 млн KZT",
                "Целевая аудитория: крупные компании,",
                "участники международных сделок.",
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
        "Высокие требования к финансовой <br/> устойчивости.",
        "Проверка документов на предмет <br/> соответствия.",
        "Длительный срок оформления <br/> (5-10 дней).",
    ];

    return (
        <div className="insurance-large">
            <h2 className="insurance-large__title">
                Страхование для Крупного <br /> и масштабного бизнеса.
            </h2>

            <BlackAdvantagesTemplate infos={descBlackTemplate} />

            <div className="insurance-large__cards">
                {cardsInfoArr.map((card) => (
                    <CardTemplate key={card.title} isFixHeight={true} isGreen={true} isGray={false}>
                        <>
                            <div className="card-template-green__top">
                                <h3 className="card-template-green__top_title">{card.title}</h3>
                                <h3
                                    className="card-template-green__top_price"
                                    dangerouslySetInnerHTML={{ __html: card.price }}
                                />
                                <h4 className="card-template-green__top_criterions_title">критерий соответствия</h4>
                                <div className="card-template-green__top_criterions">
                                    {card.complianceCriterions.map((criterion) => (
                                        <p
                                            key={criterion}
                                            className="card-template-green__top_criterions_desc"
                                            dangerouslySetInnerHTML={{ __html: criterion }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="card-template-green__bottom fix-bottom-height">
                                {/* <h4 className="card-template-green__top_criterions_title">
                                    Что входит в перечень <br />
                                    работ по каждой категории <br />
                                    услуг страховой гарантии:
                                </h4> */}
                                {card.advantages.map((adv, index) => (
                                    <div
                                        key={adv.title + index}
                                        className="card-template-green__bottom_advatage-column"
                                    >
                                        <div className="card-template-green__bottom_advatage-column__top">
                                            <Image
                                                className="card-template-green__bottom_advatage-column__top_img"
                                                src={adv.imageSrc}
                                                width={24}
                                                height={24}
                                                alt="advantage tick png"
                                            />
                                            <p className="card-template-green__bottom_advatage-column__top_text">
                                                {adv.title}
                                            </p>
                                        </div>
                                        {adv.descriptions?.map((desc) => (
                                            <p key={desc} className="card-template-green__bottom_advatage-column_text">
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
                className="insurance-large__shine_bg"
                layout="fill"
                alt="insurance large fourth bg png"
            /> */}
        </div>
    );
}
