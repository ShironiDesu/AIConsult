import Image from "next/image";
import React from "react";
import "./creditProviding.scss";

export default function CreditProviding() {
  return (
    <div className="credit-consult">
      <div className="credit-consult__left">
        <h1 className="credit-consult__left-title">
          Оказание поддержки <br />
          в получении кредитных <br />
          продуктов для <br />
          юридических лиц
        </h1>

        <p className="credit-consult__left-description">
          AI Consult ГИД — Кредитование и <br /> Банковские гарантии для юридических лиц
        </p>
      </div>

      <button className="credit-consult__btn">
        Связаться с нами 
        <Image className="credit-consult__btn-vector" src="/images/credit_screen_btn-vector.png" width={9} height={11} alt="credit screen btn vector png"/>
      </button>
    </div>
  ) 
}

{
    /* className='credit-consult__bg-left' */
}
{
    /* className='credit-consult__bg-right' */
}
{
    /* className='credit-consult__bg-bottom' */
}
{
    /* className='credit-consult__main-img' */
}
{
    /* <Image style={{position: "absolute", top: -100.01, left: -335, zIndex: -1}} src="/images/credit-screen-bg-left.png" width={1209.78} height={889.96} layout="intrinsic" alt='credit screen bg left png'/>
      <Image style={{position: "absolute", left: 1128, top: -187.21, zIndex: -1}} src="/images/credit-screen-bg-right.png" width={846} height={867} layout="intrinsic" alt='credit screen bg right png'/>
      <Image style={{position: "absolute", left: 0, top: 700, zIndex: -1}} src="/images/credit-screen-bg-bottom.png" width={2000} height={278} layout="intrinsic" alt='credit screen bg bottom png'/>
      <Image style={{position: "absolute", left: 637, top: -143, zIndex: -3}} src="/images/credit-screen-main-img.png" width={846} height={867} layout="intrinsic" alt='credit screen main img png'/> */
}
