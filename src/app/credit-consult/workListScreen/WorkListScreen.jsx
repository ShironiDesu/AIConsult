"use client";

import { useState, useEffect } from "react";
import "./workListScreen.scss";
import CardTemplate from "@/componets/cardTemplate/CardTemplate";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function WorkListScreen() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Функция для обновления ширины окна
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Добавляем слушатель событий для изменения размера окна
        window.addEventListener("resize", handleResize);

        // Очистка слушателя при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        // modules: [Navigation, Pagination],
        modules: [Navigation],
        id: "mySwiper",
        slidesPerView: 1,
        // spaceBetween: 16,
        // autoHeight: '100%',
        // centeredSlides: false,
        speed: "500",
        initialSlide: 0,
        navigation: {
            nextEl: `.swiper-button-next`, // Класс для кнопки "следующий"
            prevEl: `.swiper-button-prev`, // Класс для кнопки "предыдущий"
        },
        // pagination: { el: ".swiper-pagination", clickable: false },
        // breakpoints: {
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 24,
        //   },
        //   650: {
        //     slidesPerView: 2,
        //     spaceBetween: 24,
        //   },
        //   525: {
        //     slidesPerView: 1,
        //     spaceBetween: 24,
        //   },
        // },
        // onSlideChange: changeBulletWrapper,
    };

    const cardsInfoArr = [
        {
            title: "Тариф старт",
            price: "250 000₸",
            descriptions: [
                "Количество залоговых имуществ: до 2-х объектов;",
                "Максимальная сумма подачи кредита: от 10 млн до 50 млн KZT.",
                "Годовой оборот компании не должен превышать 150 млн KZT.",
            ],
            advantages: [
                "Проверка перечня документов необходимых для подачи заявки;",
                "Предоставление рекомендации после проверки документов;",
                "Подбор оптимального кредитного продукта для Вашей задачи.",
                "+ Бонус проверка документов до 2-х раз после корректировки документов.",
            ],
        },
        {
            title: "Тариф базовый",
            price: "400 000₸",
            descriptions: [
                "Количество залоговых имуществ: до 5 объектов.",
                "Максимальная сумма кредита: от 50 млн до 100 млн KZT.",
                "Годовой оборот компании не должен превышать 300 млн KZT.",
            ],
            advantages: [
                "Проверка перечня документов необходимых для подачи заявки;",
                "Предоставление рекомендации после проверки документов;",
                "Подбор оптимального кредитного продукта для Вашей задачи.",
                "+ Бонус проверка документов до 2-х раз после корректировки документов.",
            ],
        },
        {
            title: "Тариф основной",
            price: "550 000₸",
            descriptions: [
                "Количество залоговых имуществ: до 8-ми объектов.",
                "Максимальная сумма кредита: от 100 млн до <br/> 150 млн KZT.",
                "Годовой оборот компании не должен превышать 500 млн KZT.",
            ],
            advantages: [
                "Проверка перечня документов необходимых для подачи заявки;",
                "Предоставление рекомендации после проверки документов;",
                "Подбор оптимального кредитного продукта для Вашей задачи.",
                "+ Бонус проверка документов до 2-х раз после корректировки документов.",
            ],
        },
    ];

    const arr = ["sdfsdf", "23423423", "ghjkjhgkhj"];

    return (
        <div className="work-list">
            <h2 className="work-list__title">
                Перечень выполняемых работ <br /> по тарифам для МСБ
            </h2>
            <div className="work-list__cards">
                {cardsInfoArr.map((card) => (
                    <CardTemplate key={card.title} isGreen={false} isGray={false}>
                        <>
                            <div className="card-template__top">
                                <h3 className="card-template__top_title">{card.title}</h3>
                                <h3 className="card-template__top_price">{card.price}</h3>
                                <div className="card-template__top_list">
                                    {card.descriptions.map((desc) => (
                                        <p
                                            key={desc}
                                            className="card-template__top_list_desc"
                                            dangerouslySetInnerHTML={{ __html: desc }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="card-template__bottom">
                                {card.advantages.map((adv) => (
                                    <div key={adv} className="card-template__bottom_advatage">
                                        <Image
                                            className="card-template__bottom_advatage_img"
                                            src="/images/advantage_tick.png"
                                            width={24}
                                            height={24}
                                            alt="advantage tick png"
                                        />
                                        <p key={adv} className="card-template__bottom_advatage_text">
                                            {adv}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </>
                    </CardTemplate>
                ))}
            </div>

            {/* <Image
                src="/images/credit-screen-second-bg.png"
                className="work-list__shine_bg"
                layout="fill"
                alt="credit screen second bg png"
            /> */}

        </div>
    );
}
