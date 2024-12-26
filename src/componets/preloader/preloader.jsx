"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import "./preloader.scss";
export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const animation = useRef(null);
  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setTimeout(() => {
        animation.current.style.animation = "none";
      }, 2000);
    } else {
      window.addEventListener("load", setIsLoading(false));
      animation.current.style.animation = "fill 1s ease-in infinite alternate";
    }

    return () => {
      window.removeEventListener("load", setIsLoading);
    };
  }, [setIsLoading]);
  useEffect(() => {
    if (isLoading) {
      animation.current.style.animation = "fill 1s ease-in infinite alternate";
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      const stopAnim = setTimeout(() => {
        animation.current.style.animation = "none";
      }, 2000);
      return () => (clearTimeout(timeout), clearTimeout(stopAnim));
    }
  }, [isLoading, setIsLoading]);
  useEffect(() => {
    document.documentElement.style.setProperty("--main", "#d3c879");

    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname, setIsLoading]);

  return (
    <div className={`preloader ${isLoading ? "active" : ""}`}>
      <span className="loader" ref={animation}></span>
    </div>
  );
}
