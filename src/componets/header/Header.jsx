"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./header.scss";
import Image from "next/image";

export default function Header() {
  const [active, setActive] = useState(1);

  const navigationArr = [
    {
      title: "Главная",
      navHref: "/home",
    },
    {
      title: "Ключевые услуги",
      navHref: "/credit-consult",
    },
    {
      title: "Услуги ГИД",
      navHref: "/credit-consult",
    },
    {
      title: "Услуги ГИД по залоговым активам",
      navHref: "/credit-consult",
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <Link className="header__logo" href="/">
          <h3>AI Consult ГИД</h3>
        </Link>

        <ul className="header__navigation">
          {navigationArr.map((nav, index) => (
            <Link href={nav.navHref} key={nav.title}>
              <li
                onClick={() => setActive(index + 1)}
                className={`header__navigation__card ${
                  active === index + 1 ? "header__navigation__card--active" : ""
                }`}
              >
                <p className="header__navigation__number">0{index + 1}</p>
                <p>{nav.title}</p>
                <Image
                  src="/images/hero_screen-vector.svg"
                  width={7}
                  height={7}
                  alt="vector svg"
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
