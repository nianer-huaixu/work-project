import { Geist, Geist_Mono } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer";

import "../styles/globals.scss"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "扬东铝业",
  description: "test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ch">
      <head>
        <title>江苏扬东铝业集团-高精工业铝板|铝棒|铝卷|铝管|铝型材|航空铝|进口铝</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
