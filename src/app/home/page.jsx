"use client";
import HomePageSection from "./sections/HomePageSection";
import "./page.scss";

export default function Home() {
  return (
    <div id="home-background" className="background">
      <div className="container">
        <main className="homepage__main">
          <HomePageSection />
        </main>
      </div>
    </div>
  );
}
