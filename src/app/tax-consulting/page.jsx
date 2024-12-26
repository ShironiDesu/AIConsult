"use client";
import React, { useEffect, useState } from "react";
import "./page.scss";
import LegalCard from "../../componets/consult-pages-cards/LegalCard";
import LegalTitle from "../../componets/consult-pages-titles/LegalTitle";
import Footer from "@/componets/footer/Footer";
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
    img: "/images/TaxConsultTitleICon.svg",
    h1: "Налоговый консалтинг",
    p: "AI Consult ГИД — Кредитование и Банковские гарантии для юридических лиц",
  };
  const dataCard = [
    {
      bgImg: "",
      img: "/images/ConsultLaw.svg",
      whiteText: "Налоговая отчетность",
      grayText: "подготовка и подача деклараций, расчет налогов.",
    },
    {
      bgImg: "LegalConsultLow",
      img: "/images/ConsultCourt.svg",
      whiteText: "Консультации по налоговому <br/> законодательству",
      grayText: "помощь в понимании и применении налоговых норм.",
    },
    {
      bgImg: "",
      img: "/images/ConsultCertificate.svg",
      whiteText: "Оптимизация <br/> налогообложения",
      grayText:
        "разработка стратегий для минимизации налоговой нагрузки в рамках закона.",
    },
    {
      bgImg: "",
      img: "/images/ConsultPencil.svg",
      whiteText: "Сопровождение при <br/> налоговых проверках",
      grayText:
        "защита интересов клиента, ведение переговоров с налоговыми органами.",
    },
    {
      bgImg: "",
      img: "/images/ConsultHammer.svg",
      whiteText: "Аудит налоговой <br/> документации",
      grayText: "проверка корректности налогового учета и отчетности.",
    },
    {
      bgImg: "",
      img: "/images/ConsultSword.svg",
      whiteText: "Управление налоговыми  рисками",
      grayText:
        "выявление и минимизация возможных рисков, связанных с налогообложением.",
    },
  ];

  // if (isMobile === null) {
  //   return null; // Предотвращаем рендеринг до того, как мы определим, мобильное ли устройство
  // }

  return (
    <div id="tax-background" className="background">
      <div className="container">
        {isMobile ? (
          <main className="tax-consulting__main__mobile">
            <section className="tax-consulting__main__mobile__title">
              <LegalTitle data={dataTitle} />
            </section>
            <section className="tax-consulting__main__mobile__cards">
              <LegalCard data={dataCard[0]} />
              <LegalCard data={dataCard[2]} />
              <LegalCard data={dataCard[4]} />
              <LegalCard data={dataCard[1]} />
              <LegalCard data={dataCard[3]} />
              <LegalCard data={dataCard[5]} />
            </section>
          </main>
        ) : (
          <main className="tax-consulting__main">
            <section className="tax-consulting__main__title">
              <LegalTitle data={dataTitle} />
            </section>
            <section className="tax-consulting__main__cards">
              <div className="tax-consulting__main__cards__left">
                <LegalCard data={dataCard[0]} />
                <LegalCard data={dataCard[1]} />
              </div>
              <div className="tax-consulting__main__cards__middle">
                <LegalCard data={dataCard[2]} />
                <LegalCard data={dataCard[3]} />
              </div>
              <div className="tax-consulting__main__cards__right">
                <LegalCard data={dataCard[4]} />
                <LegalCard data={dataCard[5]} />
              </div>
            </section>
          </main>
        )}
      </div>
      <Footer/>
    </div>
  );
}
