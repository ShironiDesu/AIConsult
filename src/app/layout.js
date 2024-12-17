import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/general.scss";
import localFont from "next/font/local";
import Header from "@/componets/header/Header";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", 'cyrillic-ext'],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const euclidCircularB = localFont({
  src: "./fonts/Euclid Circular B Regular.ttf",
  variable: "--euclid-circular",
  weight: "100 900",
});
export const metadata = {
  title: "AI Consult",
  description:
    "Оказание поддержки в получении кредитных продуктов для юридических лиц",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${euclidCircularB.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
