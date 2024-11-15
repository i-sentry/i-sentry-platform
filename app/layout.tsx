import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Isentry Technologies - Pioneering the Digital Frontier",
  description:
    "Our cutting-edge solutions and global expertise empower businesses to navigate and thrive in the digital landscape of tomorrow.",
};

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} antialiased`}
    >
      <body className="overflow-x-hidden font-dm-sans">
        {/* NAVBAR */}
        <Navbar />
        <main className="w-full overflow-x-clip">{children}</main>
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
