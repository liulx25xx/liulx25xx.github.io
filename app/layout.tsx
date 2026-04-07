import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";
import SplashScreenManager from "./components/SplashScreenManager";
import { Providers } from "./providers";
import { Archivo, Rubik, Sora } from "next/font/google";
import TopoWaves from "./components/TopoWaves";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Lixin Liu | Portfolio",
  description:
    "Lixin Liu is a Master's student at Tsinghua University specializing in digital media technology, E-Learning materials, and AI applications.",
  keywords: [
    "Lixin Liu",
    "Portfolio",
    "Tsinghua University",
    "Digital Media",
    "AI Applications"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Lixin Liu | Portfolio",
    description:
      "Explore the portfolio of Lixin Liu, specializing in digital media, AI applications, and E-Learning.",
    url: "https://liulx25xx.github.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lixin Liu | Portfolio",
    description:
      "Master's student at Tsinghua University specializing in digital media technology, E-Learning materials, and AI applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${sora.variable} ${archivo.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Providers>
          <TopoWaves />
          <SplashScreenManager>
            <Navbar />
            <Sidebar />
            <main className=" px-5 sm:px-12">{children}</main>
            <Copyright />
          </SplashScreenManager>
        </Providers>
      </body>
    </html>
  );
}
