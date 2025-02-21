import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import "./globals.css";
import RequestTransferContextProvider from "@/context/RequestTransferContext";


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rungruang Sub Samui Co.,Ltd. Transfer Service and Car For Rent on Koh Samui Thailand",
  description: "Transfer service made simple on Koh Samui, Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body className={`montserrat.className, h-auto`}>
          <div className="h-full">
            <Header />
            <RequestTransferContextProvider>
              {children}
            </RequestTransferContextProvider>
          </div>
          <div className="h-20">
            <Footer />
          </div>
        </body>
      </html>
    // </ClerkProvider>
  );
}
