import React from 'react'
import "./smallCardTemplate.scss"
import Image from 'next/image'

export default function SmallCardTemplate({card}) {
  return (
    <div className='small-card'>
        <Image src={card.imgSrc} layout='intrinsic' width={48} height={48} alt={card.title}/>
        <div className='small-card__inner'>
            <p className='small-card__inner-title' dangerouslySetInnerHTML={{ __html: card.title }}/>
        </div>
    </div>
  )
}
