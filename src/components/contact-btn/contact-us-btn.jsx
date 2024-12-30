"use client";
import React from "react";
import "./contact-us-btn.scss";
import Image from "next/image";

export default function ContactUsBtn({
  type,
  isSubmit,
  onClick,
  isSubmitting,
}) {
  const phoneNumber = "+77715920875";

  const handleClick = () => {
    if (isSubmit) {
      onClick();
    } else {
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={handleClick}
      className="contact-us__btn"
    >
      Связаться с нами
      {isSubmitting ? (
        <div className="footer_input__loader">
          <span class="span__loader"></span>
        </div>
      ) : (
        <>
          <Image
            className="contact-us__btn-vector"
            src="/images/credit_screen_btn-vector.png"
            width={9}
            height={11}
            alt="Contact Us"
          />
        </>
      )}
    </button>
  );
}
