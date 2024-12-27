"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
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
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(true);
  const navRefs = useRef([]);
  const pathname = usePathname();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!isMobile) {
      setIsSheetOpen(false);
    }
  }, [isMobile]);
  const navigationArr = [
    {
      title: "Главная",
      navHref: "/",
    },
    {
      title: "Ключевые услуги",
      navTitles: [
        {
          title:
            "Оказание поддержки в получении банковских гарантии для юридических лиц",
          navHref: "/bank-guarantees",
        },
        {
          title: "Оказание поддержки в получении страховки для юридических лиц",
          navHref: "/getting-insurance",
        },
        {
          title:
            "Оказание поддержки в получении кредитных продуктов для юридических лиц",
          navHref: "/credit-consult",
        },
      ],
    },
    {
      title: "Услуги ГИД",
      navTitles: [
        {
          title: "Налоговый консалтинг",
          navHref: "/tax-consulting",
        },
        {
          title: "Бухгалтерский консалтинг",
          navHref: "/accounting-consulting",
        },
        {
          title: "Юридический консалтинг",
          navHref: "/legal-consulting",
        },
      ],
    },
    {
      title: "Услуги ГИД по залоговым активам",
      navHref: "/404",
    },
  ];
  useEffect(() => {
    const currentNavIndex = navigationArr.findIndex(
      (nav) => pathname === nav.navHref
    );

    if (currentNavIndex !== -1) {
      setActiveIndex(currentNavIndex);
    } else {
      const currentNavSubIndex = navigationArr.findIndex((nav) =>
        nav.navTitles?.some((navItem) => pathname === navItem.navHref)
      );
      setActiveIndex(currentNavSubIndex);
    }
  }, [pathname]);
  const handleSheetOpen = () => {
    setIsSheetOpen((prev) => !prev);
  };
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    updateNavigationPosition(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
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

  return (
    <div className="header">
      <div className="container">
        <Link className="header__logo" href="/">
          <h3>AI Consult ГИД</h3>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="header__navigation">
            {navigationArr.map((nav, index) => {
              if (nav.navTitles) {
                return (
                  <NavigationMenuItem
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    ref={(el) => (navRefs.current[index] = el)}
                  >
                    <NavigationMenuTrigger
                      id={`item-${index + 1}`}
                      className={`header__navigation__card ${
                        activeIndex === index
                          ? "header__navigation__card--active"
                          : ""
                      }`}
                    >
                      <p className="header__navigation__number">0{index + 1}</p>
                      <p className="header__navigation__title">{nav.title}</p>
                    </NavigationMenuTrigger>
                    {!isMobile && (
                      <NavigationMenuContent>
                        {nav.navTitles.map((navItem, index) => (
                          <div key={index}>
                            <Link
                              legacyBehavior
                              passHref
                              href={navItem.navHref}
                            >
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                <p className="header__navigation__p">
                                  {navItem.title}
                                </p>
                              </NavigationMenuLink>
                            </Link>
                            {index !== nav.navTitles.length - 1 && (
                              <Separator className="header__navigation__separator" />
                            )}
                          </div>
                        ))}
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <Link key={index} href={nav.navHref}>
                    <div
                      className={`header__navigation__card ${
                        activeIndex === index
                          ? "header__navigation__card--active"
                          : ""
                      }`}
                    >
                      <p className="header__navigation__number">0{index + 1}</p>
                      <p className="header__navigation__title">{nav.title}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
        {isMobile && (
          <Sheet onOpenChange={handleSheetOpen}>
            <SheetTrigger asChild>
              <div className="header__burger">
                <div
                  className={`header__burger__top ${isSheetOpen ? "open" : ""}`}
                ></div>
                <div
                  className={`header__burger__mid ${isSheetOpen ? "open" : ""}`}
                ></div>
                <div
                  className={`header__burger__bottom ${
                    isSheetOpen ? "open" : ""
                  }`}
                ></div>
                <Image
                  src="/images/BurgerClose.svg"
                  alt="Burger close"
                  width={22}
                  height={22}
                  className={`header__burger__img ${isSheetOpen ? "open" : ""}`}
                />
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
                    <AccordionItem key={index} value={`item-${index}`}>
                      {nav.navTitles ? (
                        <AccordionTrigger
                          className={`header__navigation__mobile__card  ${
                            activeIndex === index
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
                      ) : (
                        <Link href={nav.navHref}>
                          <SheetClose asChild>
                            <div
                              className={`header__navigation__mobile__card  ${
                                activeIndex === index
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
                            </div>
                          </SheetClose>
                        </Link>
                      )}

                      {nav.navTitles &&
                        nav.navTitles.map((navItem, index) => (
                          <Link key={index} href={navItem.navHref}>
                            <AccordionContent className="header__navigation__mobile__card__accordion__content">
                              <SheetClose className="flex gap-4 items-center">
                                <span className="header__navigation__mobile__card__accordion__content__number">
                                  0{index + 1}
                                </span>
                                <p className="header__navigation__mobile__card__accordion__content__title">
                                  {navItem.title}
                                </p>
                              </SheetClose>
                            </AccordionContent>
                          </Link>
                        ))}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
}
