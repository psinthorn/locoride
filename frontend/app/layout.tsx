import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rRSs: Limousine Service on Koh Samui Thailand",
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
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
