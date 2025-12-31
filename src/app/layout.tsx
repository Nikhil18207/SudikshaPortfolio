import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const balabelooPro = localFont({
  src: "../../public/fonts/Balabeloo Pro Regular.ttf",
  variable: "--font-balabeloo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sudiksha Samanta",
  description:
    "Personal website of Sudiksha Samanta - Data Analyst & ECE Student turning data into insights",
  generator: "Next.js",
  applicationName: "Sudiksha Samanta Portfolio",
  keywords: [
    "Sudiksha Samanta",
    "data analytics",
    "machine learning",
    "Power BI",
    "Python",
    "ECE",
    "portfolio",
  ],
  authors: [{ name: "Sudiksha Samanta" }],
  creator: "Sudiksha Samanta",
  publisher: "Sudiksha Samanta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sudiksha Samanta",
    description: "Data Analyst & ECE Student turning data into insights",
    url: "https://sudiksha.xyz/",
    siteName: "Sudiksha Samanta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sudiksha Samanta",
    description: "Data Analyst & ECE Student turning data into insights",
    creator: "@sudiksha",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${balabelooPro.variable} antialiased`}
      >
        <div className="relative">
          <div className="relative mx-auto max-w-screen-xl">
            <div className="absolute left-8 top-0 bottom-0 border-l border-dotted border-[var(--border)] border-opacity-40 h-full overflow-hidden"></div>

            <div className="absolute right-8 top-0 bottom-0 border-l border-dotted border-[var(--border)] border-opacity-40 h-full overflow-hidden"></div>

            <div className="px-[34px]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
