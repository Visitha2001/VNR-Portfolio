import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
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
    <html lang="en">

      <body
        className={`${monaSans.variable} antialiased pattern bg-gray-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
