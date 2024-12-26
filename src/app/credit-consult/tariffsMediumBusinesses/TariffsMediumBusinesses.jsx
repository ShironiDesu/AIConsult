"use client"
import React from 'react'
import "./tariffsMediumBusinesses.scss"
import CardTemplate from '@/componets/cardTemplate/CardTemplate'
import Image from 'next/image'

export default function TariffsMediumBusinesses() {

    const cardsInfoArr = [
        {
            title: "Тариф Оптимум",
            price: "750 000₸",
            descriptions: [
                "Количество залоговых имуществ: до 12-ти объектов;",
                "Максимальная сумма подачи кредита: от 150 млн до 220 млн KZT.",
                "Годовой оборот компании не должен превышать 800 млн KZT."
            ],
            advantages: [
                "Проверка перечня документов необходимых для подачи заявки;",
                "Предоставление рекомендации после проверки документов;",
                "Подбор оптимального кредитного продукта для Вашей задачи.",
                "Консультация",
                "+ Бонус проверка документов до 3-х раз после корректировки документов."
            ]
        },
        {
            title: "Тариф Продвинутый",
            price: "1 000 000₸",
            descriptions: [
                "Количество залоговых имуществ: до 16-ти объектов.",
                "Максимальная сумма кредита: от 220 млн <br/> до 300 млн KZT.",
                "Годовой оборот компании не должен превышать 1 млрд KZT."
            ],
            advantages: [
                "Проверка перечня документов необходимых для подачи заявки;",
                "Предоставление рекомендации после проверки документов;",
                "Подбор оптимального кредитного продукта для Вашей задачи.",
                "Консультация",
                "+ Бонус проверка документов до 3-х раз после корректировки документов."
            ]
        },
        {
            title: "Тариф Бизнес",
            price: "1 500 000₸",
            descriptions: [
                "Количество залоговых имуществ: до 22-х объектов.",
                "Максимальная сумма кредита: от 300 млн до <br/> 500 млн KZT.",
                "Годовой оборот компании не должен превышать 2 млрд KZT."
            ],
            advantages: [
                "Проверка перечня документов необходимых для подачи заявки;",
                "Предоставление рекомендации после проверки документов;",
                "Подбор оптимального кредитного продукта для Вашей задачи.",
                "Консультация",
                "+ Бонус проверка документов до 3-х раз после корректировки документов."
            ]
        }
    ]

  return (
    <div className='tariffs-medium'>
        <h2 className='tariffs-medium__title'>Тарифы для Среднего и <br /> частично Крупного Бизнеса:</h2>
        <div className='tariffs-medium__cards'>
            {cardsInfoArr.map(card => (
                <CardTemplate key={card.title} isGreen={false} isGray={false}>
                    <>
                        <div className='card-template__top'>
                            <h3 className='card-template__top_title'>{card.title}</h3>
                            <h3 className='card-template__top_price'>{card.price}</h3>
                            <div className='card-template__top_list'>
                                {card.descriptions.map(desc => (
                                    <p key={desc} className='card-template__top_list_desc' dangerouslySetInnerHTML={{ __html: desc }}/>
                                ))}
                            </div>
                        </div>
                        <div className='card-template__bottom'>
                            {card.advantages.map(adv => (
                                <div key={adv} className='card-template__bottom_advatage'>
                                    <Image className='card-template__bottom_advatage_img' src="/images/advantage_tick.png" width={24} height={24} alt='advantage tick png'/>
                                    <p key={adv} className='card-template__bottom_advatage_text'>{adv}</p>
                                </div> 
                            ))}
                        </div>
                    </>
                </CardTemplate>
            ))}
        </div>
        {/* <Image src="/images/credit-screen-third-bg.png" className='tariffs-medium__shine_bg'  layout='fill' alt='credit screen second bg png'/> */}

    </div>
  )
}
