import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menubar from "@/components/Menubar";
import Scene from "@/components/3d/Scene";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rohith Sai's Portfolio",
  description: "An interactive portfolio for Rohith Sai, an AI/ML Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("no-scrollbar", GeistMono.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Scene />
          <Menubar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
