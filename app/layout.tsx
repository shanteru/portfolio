import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chantelle's",
  description: "My Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
