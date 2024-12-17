import React from 'react'
import "./page.scss"
import CreditProviding from './creditProviding/CreditProviding'

export default function page() {
  return (
    <div className="background">
        <div className='container'>
            <div className='credit-consult'>
                <CreditProviding/>
            </div>
        </div>
    </div>
    
  )
}
