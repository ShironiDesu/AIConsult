import Image from "next/image";
import React from "react";
import "./supportProviding.scss";

export default function SupportProviding() {
    return (
        <div className="support-consult">
            <div className="support-consult__left">
                <h1 className="support-consult__left-title">
                    Оказание поддержки <br />
                    в получении банковских <br />
                    гарантии для юридических <br />
                    лиц
                </h1>

                <p className="support-consult__left-description">
                    AI Consult ГИД — Кредитование и <br /> Банковские гарантии для юридических лиц
                </p>
            </div>

            <button className="support-consult__btn">
                Связаться с нами
                <Image
                    className="support-consult__btn-vector"
                    src="/images/credit_screen_btn-vector.png"
                    width={9}
                    height={11}
                    alt="support consult btn vector png"
                />
            </button>
        </div>
    );
}
