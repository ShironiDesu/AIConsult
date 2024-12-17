"use client"
import React, { useState } from "react";
import "./header.scss";
import Image from "next/image";

export default function Header() {

  const [active, setActive] = useState(1)

  const navigationArr = [
    {
      title: "Главная",
      // href: ,
    },
    {
      title: "Ключевые услуги",
      // href: ,
    },
    {
      title: "Услуги ГИД",
      // href: ,
    },
    {
      title: "Услуги ГИД по залоговым активам",
      // href: ,
    }
  ]

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <h3>AI Consult ГИД</h3>
        </div>

        <ul className="header__navigation">
          {navigationArr.map((nav, index) => (
            <li onClick={() => setActive((index + 1))} key={nav.title} className={`header__navigation__card ${active === (index + 1) ? 'header__navigation__card--active' : ''}`}>
              <p className="header__navigation__number">0{index + 1}</p>
              <p>{nav.title}</p>
              <Image src="/images/vector.svg" width={7} height={7} alt="vector svg"/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
