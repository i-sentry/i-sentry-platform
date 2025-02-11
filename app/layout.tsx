import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

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
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>

      <body className="overflow-x-hidden font-dm-sans">
        <Toaster
          position="top-right"
          toastOptions={{
            // unstyled: true,
            classNames: {
              error:
                "bg-red-700 text-white rounded-xl border border-primary-100/20",
              success:
                "bg-green-700 text-white rounded-xl border border-primary-100/20",
              // title: "text-secondary-300",
              warning: "text-yellow-400",
              info: "bg-blue-400",
              // toast: "bg-primary-900 rounded-xl border border-primary-100/20",
            },
          }}
        />
        {/* NAVBAR */}
        <Navbar />
        <main className="w-full overflow-x-clip contain-paint">{children}</main>
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
