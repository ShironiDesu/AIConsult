import React from "react";
import "./contact-us-btn.scss";
import Image from "next/image";

export default function ContactUsBtn() {
  return (
    <button className="contact-us__btn">
      Связаться с нами
      <Image
        className="contact-us__btn-vector"
        src="/images/credit_screen_btn-vector.png"
        width={9}
        height={11}
        alt="Contact Us"
      />
    </button>
  );
}
