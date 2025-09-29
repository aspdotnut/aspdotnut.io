import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
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
