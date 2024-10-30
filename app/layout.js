"use client";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Header from "../src/components/header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "h-full w-full bg-white dark:bg-black flex justify-center"
        )}
      >
        <div
          className="relative  flex flex-col gap-2 border-l border-r"
          style={{ height: "1000px", width: "500px" }}
        >
          <Header />
          <div className="flex-1 overflow-hidden">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
