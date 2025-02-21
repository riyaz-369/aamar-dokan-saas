import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SessionProvider from "@/providers/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "@/providers/StoreProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aamar Dokan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/aamarDokan.ico" sizes="any" />

      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased`}
        suppressHydrationWarning={true}
      >
        <main>
          <StoreProvider>
            <SessionProvider>
              <ThemeProvider attribute="class">{children}</ThemeProvider>
              <Toaster />
            </SessionProvider>
          </StoreProvider>
        </main>
      </body>
      <GoogleAnalytics gaId="G-62Q3RGYNSB" />
    </html>
  );
}
