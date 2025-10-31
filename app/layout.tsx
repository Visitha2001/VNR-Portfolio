import type { Metadata } from "next";
import { Mona_Sans, Creepster, Abhaya_Libre, Festive, Mountains_of_Christmas } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creepster',
});

const abhayaLibre = Abhaya_Libre({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abhaya-libre',
});

const festive = Festive({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-festive',
});

const mountainsOfChristmas = Mountains_of_Christmas({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mountains-of-christmas',
});

export const metadata: Metadata = {
  title: "Visitha Dev",
  description: "Visitha Dev Portfolio | Visitha Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">

      <body
        className={`${monaSans.variable} ${creepster.variable} ${abhayaLibre.variable} ${festive.variable} ${mountainsOfChristmas.variable} antialiased pattern bg-gray-950`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
