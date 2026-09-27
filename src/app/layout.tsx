import type { Metadata, Viewport } from "next";
import { Saira, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { club } from "@/data/site";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["600", "800", "900"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${club.name} | ${club.school}`,
  description: club.tagline,
  openGraph: {
    title: `${club.name} at UT`,
    description: club.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${saira.variable} ${hanken.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="grain min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
