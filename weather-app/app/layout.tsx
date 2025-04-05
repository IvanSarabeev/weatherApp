"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/context/theme-provider";
import {ReactNode, useEffect} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children}: {children: ReactNode}
) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark").matches) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
