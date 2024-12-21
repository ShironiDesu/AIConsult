import React from 'react'
import "./cardTemplate.scss"
import Image from 'next/image'

export default function CardTemplate({children, isGreen, isGray, isFixHeight, isChangedHeight}) {
  return (
    <div className={`${isGreen ? "card-template-green" : isGray ? "card-template-gray" : "card-template"} ${isFixHeight ? "fix-height" : ""}`} id={isChangedHeight ? "changed-height" : ""}>
      {children}
    </div>
  )
}
