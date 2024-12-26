"use client";
import React from "react";
import "./blackAdvantagesTemplate.scss";
import Image from "next/image";


export default function BlackAdvantagesTemplate({infos, isThicker}) {
  return (
    <div className='black-advantages' id={isThicker ? "thicker" : ""}>
        <p className='black-advantages__text' dangerouslySetInnerHTML={{ __html: infos[0] }}/>



      <Image
        src="/images/green-point-vector.png"
        width={12}
        height={12}
        alt="green point vector png"
      />

      <p
        className="black-advantages__text"
        dangerouslySetInnerHTML={{ __html: infos[1] }}
      />

      <Image
        src="/images/green-point-vector.png"
        width={12}
        height={12}
        alt="green point vector png"
      />

      <p
        className="black-advantages__text"
        dangerouslySetInnerHTML={{ __html: infos[2] }}
      />
    </div>
  );
}
