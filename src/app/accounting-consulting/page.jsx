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
    img: "/images/AccountingConsultTitleICon.svg",
    h1: "Бухгалтерский консалтинг",
    p: "AI Consult ГИД — Кредитование и Банковские гарантии для юридических лиц",
  };
  const dataCard = [
    {
      bgImg: "/images/AccountingCardBg(1).jpg",
      img: "/images/ConsultLaw.svg",
      whiteText: "Ведение бухгалтерского учета",
      grayText:
        "полное или частичное сопровождение учета для компаний любого масштаба.",
    },
    {
      bgImg: "/images/AccountingCardBg(2).jpg",
      img: "/images/ConsultCourt.svg",
      whiteText: "Восстановление учета",
      grayText:
        "приведение документации в порядок в случае пропусков или ошибок.",
    },
    {
      bgImg: "/images/AccountingCardBg(3).jpg",
      img: "/images/ConsultCertificate.svg",
      whiteText: "Составление и сдача отчетности",
      grayText:
        "подготовка бухгалтерской, налоговой и финансовой отчетности в соответствии с законодательством.",
    },
    {
      bgImg: "/images/AccountingCardBg(4).jpg",
      img: "/images/ConsultPencil.svg",
      whiteText: "Аудит бухгалтерского учета",
      grayText: "проверка правильности ведения учета и выявление ошибок.",
    },
    {
      bgImg: "/images/AccountingCardBg(5).jpg",
      img: "/images/ConsultHammer.svg",
      whiteText: "Оптимизация учета",
      grayText: "автоматизация процессов и снижение издержек на бухгалтерию.",
    },
  ];
  return (
    <div id="accounting-background" className="background">
      <div className="container">
        {isMobile ? (
          <main className="accounting-consulting__main__mobile">
            <section className="accounting-consulting__main__mobile__title">
              <LegalTitle data={dataTitle} />
            </section>
            <section className="accounting-consulting__main__mobile__cards">
              <LegalCard data={dataCard[0]} />
              <LegalCard data={dataCard[2]} />
              <LegalCard data={dataCard[3]} />
              <LegalCard data={dataCard[1]} />
              <LegalCard data={dataCard[4]} />
            </section>
          </main>
        ) : (
          <main className="accounting-consulting__main">
            <section className="accounting-consulting__main__title">
              <LegalTitle data={dataTitle} />
            </section>
            <section className="accounting-consulting__main__cards">
              <div className="accounting-consulting__main__cards__left">
                <LegalCard data={dataCard[0]} />
                <LegalCard data={dataCard[1]} />
              </div>
              <div className="accounting-consulting__main__cards__middle">
                <LegalCard data={dataCard[2]} />
              </div>
              <div className="accounting-consulting__main__cards__right">
                <LegalCard data={dataCard[3]} />
                <LegalCard data={dataCard[4]} />
              </div>
            </section>
          </main>
        )}
      </div>
      <Footer />
      <div className="another-smooth-transition"></div>
    </div>
  );
}
