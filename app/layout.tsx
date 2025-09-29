import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";

const poppins = Poppins({
    weight: "200",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Aspdotnut",
    description: "New site who dis",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={poppins.className + " min-h-screen flex flex-col bg-background"}>
      <Header/>
      <div className={"flex-grow flex justify-center w-full"}>
          <div className={"w-full max-w-screen-lg px-4"}>
              {children}
          </div>
      </div>
      <Footer/>
      </body>
      </html>
  );
}
