"use client";
import React, { useEffect, useState } from "react";
import "./page.scss";
import LegalCard from "../../components/consult-pages-cards/LegalCard";
import LegalTitle from "../../components/consult-pages-titles/LegalTitle";
import Footer from "@/components/footer/Footer";
export default function page() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const dataTitle = {
    img: "/images/LegalConsultTitleICon.svg",
    h1: "Юридический консалтинг",
    p: "AI Consult ГИД — Кредитование и Банковские гарантии для юридических лиц",
  };
  const dataCard = [
    {
      bgImg: "/images/LegalCardBg(1).jpg",
      img: "/images/ConsultLaw.svg",
      whiteText: "Подача исков",
      grayText:
        "подготовка и подача исков в суды, сопровождение судебного процесса.",
    },
    {
      bgImg: "/images/LegalCardBg(2).jpg",
      img: "/images/ConsultCourt.svg",
      whiteText: "Судебное сопровождение",
      grayText: "полное сопровождение споров на всех стадиях.",
    },
    {
      bgImg: "/images/LegalCardBg(3).jpg",
      img: "/images/ConsultCertificate.svg",
      whiteText: "Получение лицензий",
      grayText:
        "оформление лицензий для ведения определенных видов деятельности.",
    },
    {
      bgImg: "/images/LegalCardBg(4).jpg",
      img: "/images/ConsultPencil.svg",
      whiteText: "Договорное право",
      grayText:
        "помощь в составлении, анализе и ведении переговоров по договорам.",
    },
    {
      bgImg: "/images/LegalCardBg(5).jpg",
      img: "/images/ConsultHammer.svg",
      whiteText: "Юридическая помощь",
      grayText:
        "консультирование по правовым вопросам, составление и проверка договоров, правовая защита интересов.",
    },
    {
      bgImg: "/images/LegalCardBg(6).jpg",
      img: "/images/ConsultSword.svg",
      whiteText: "Защита активов и управление рисками",
      grayText: "юридическая поддержка по минимизации рисков и защите активов.",
    },
  ];
  return (
    <div id="legal-background" className="background">
      <div className="container">
        {isMobile ? (
          <main className="legal-consulting__main__mobile">
            <section className="legal-consulting__main__mobile__title">
              <LegalTitle data={dataTitle} />
            </section>
            <section className="legal-consulting__main__mobile__cards">
              <LegalCard data={dataCard[0]} />
              <LegalCard data={dataCard[2]} />
              <LegalCard data={dataCard[4]} />
              <LegalCard data={dataCard[1]} />
              <LegalCard data={dataCard[3]} />
              <LegalCard data={dataCard[5]} />
            </section>
          </main>
        ) : (
          <main className="legal-consulting__main">
            <section className="legal-consulting__main__title">
              <LegalTitle data={dataTitle} />
            </section>
            <section className="legal-consulting__main__cards">
              <div className="legal-consulting__main__cards__left">
                <LegalCard data={dataCard[0]} />
                <LegalCard data={dataCard[1]} />
              </div>
              <div className="legal-consulting__main__cards__middle">
                <LegalCard data={dataCard[2]} />
                <LegalCard data={dataCard[3]} />
              </div>
              <div className="legal-consulting__main__cards__right">
                <LegalCard data={dataCard[4]} />
                <LegalCard data={dataCard[5]} />
              </div>
            </section>
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
}
