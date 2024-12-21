import React from "react";
import "./page.scss";
import LegalCard from "../../componets/consult-pages-cards/LegalCard";
import LegalTitle from "../../componets/consult-pages-titles/LegalTitle";
export default function page() {
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
      whiteText: "Управление налоговыми <br/> рисками",
      grayText:
        "выявление и минимизация возможных рисков, связанных с налогообложением.",
    },
  ];
  return (
    <div className="background">
      <div className="container">
        <main className="tax-consulting__main">
          <section className="legal-consulting__main__title">
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
      </div>
    </div>
  );
}
