import type { Metadata } from "next";
import { roboto } from "../lib/fonts";
import "./globals.css";

import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { ChatBot } from "../components/ChatBot";

export const metadata: Metadata = {
  title: "Anthony Lynn",
  description: "Anthony Lynn's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={["light", "dark"]}
        >
          <div className="min-h-screen w-full flex flex-col items-center bg-base-secondary text-text-primary">
            <Header />
            {children}
            <ChatBot />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
