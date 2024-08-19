import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Banner from "./../components/Home/Banner";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rOs: Limousine Service on Koh Samui Thailand",
  description: "Transfer service on Koh Samui Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <Header />
          <Banner/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
