"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import "./header.scss";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  SheetHeader,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navRefs = useRef([]);

  const [active, setActive] = useState(1);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigationArr = [
    {
      title: "Главная",
      navHref: "/",
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
  const handleSheetOpen = () => {
    setIsSheetOpen(!isSheetOpen);
  };
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    updateNavigationPosition(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    resetNavigationPosition();
  };

  const updateNavigationPosition = (index) => {
    if (!navRefs.current[index]) return;
    const navElement = navRefs.current[index];
    const elementRect = navElement.getBoundingClientRect();
    const containerRect = navElement.parentElement.getBoundingClientRect();
    const leftPosition = elementRect.left - containerRect.left;

    document.documentElement.style.setProperty(
      "--navigation-position",
      `${leftPosition}px`
    );
  };

  const resetNavigationPosition = () => {
    document.documentElement.style.setProperty("--navigation-position", "0px");
  };
  return (
    <div className="header">
      <div className="container">
        <Link className="header__logo" href="/">
          <h3>AI Consult ГИД</h3>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="header__navigation">
            {navigationArr.map((nav, index) => (
              <NavigationMenuItem
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                ref={(el) => (navRefs.current[index] = el)}
              >
                <NavigationMenuTrigger
                  onClick={() => setActive(index + 1)}
                  id={`item-${index + 1}`}
                  className={`header__navigation__card ${
                    active === index + 1
                      ? "header__navigation__card--active"
                      : ""
                  }`}
                >
                  <p className="header__navigation__number">0{index + 1}</p>
                  <p className="header__navigation__title">{nav.title}</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link legacyBehavior passHref href={nav.navHref}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <p className="header__navigation__p">
                        Оказание поддержки в получении кредитных продуктов для
                        юридических лиц
                      </p>
                    </NavigationMenuLink>
                  </Link>
                  <Separator className="header__navigation__separator" />
                  <Link legacyBehavior passHref href={nav.navHref}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <p className="header__navigation__p">
                        Оказание поддержки в получении кредитных продуктов для
                        юридических лиц
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger asChild>
            <div onClick={handleSheetOpen} className="header__burger">
              <div className={`header__burger__top `}></div>
              <div className={`header__burger__mid `}></div>
              <div className={`header__burger__bottom `}></div>
            </div>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="hidden"></SheetTitle>
              <SheetDescription className="hidden"></SheetDescription>
            </SheetHeader>
            <div className="header__navigation__mobile">
              <Accordion type="single" collapsible>
                {navigationArr.map((nav, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    onClick={() => setActive(index + 1)}
                  >
                    <AccordionTrigger
                      className={`header__navigation__mobile__card ${
                        active === index + 1
                          ? "header__navigation__mobile__card--active"
                          : ""
                      }`}
                    >
                      <span className="header__navigation__mobile__card__number">
                        0{index + 1}
                      </span>
                      <p className="header__navigation__mobile__card__title">
                        {nav.title}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="header__navigation__mobile__card__accordion__content">
                      <span className="header__navigation__mobile__card__accordion__content__number">
                        0{index + 1}
                      </span>
                      <p className="header__navigation__mobile__card__accordion__content__title">
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
