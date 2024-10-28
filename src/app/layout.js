"use client";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Header } from "next/dist/lib/load-custom-routes";
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
          "h-full bg-white dark:bg-black"
        )}
      >
        <div className=" relative m-auto flex max-h-full min-h-full max-w-md flex-col gap-2 border-x">
          <div className="flex-1 overflow-hidden ">{children}</div>
        </div>
      </body>
    </html>
  );
}
