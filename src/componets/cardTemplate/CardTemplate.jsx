import React from 'react'
import "./cardTemplate.scss"
import Image from 'next/image'

export default function CardTemplate({card}) {
  return (
    <div className='card-template'>
        <div className='card-template__top'>
            <h3 className='card-template__top_title'>{card.title}</h3>
            <h3 className='card-template__top_price'>{card.price}</h3>
            <div className='card-template__top_list'>
                {card.descriptions.map(desc => (
                    <p key={desc} className='card-template__top_list_desc'>{desc}</p>
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
    </div>
  )
}
