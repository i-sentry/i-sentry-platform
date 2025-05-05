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
  title: "ISentry Technologies — Pioneering the Digital Frontier",
  description:
    "Discover the amazing potential of your business with our creative solutions and global expertise, crafted to support you as you navigate the exciting digital landscape of the future!",
  keywords: [
    "Technology solutions provider",
    "IT consulting services",
    "Software development company",
    "Custom software solutions",
    "Enterprise software development",
    "Cloud computing solutions",
    "AI-powered software solutions",
    "Cybersecurity solutions for businesses",
    "Next-gen digital transformation",
    "SaaS development company",
    "Business automation software",
    "Custom enterprise applications",
    "Cloud-based business solutions",
    "Tech-driven business growth",
    "Machine learning solutions for enterprises",
    "Blockchain technology services",
    "IT infrastructure consulting",
    "Managed IT services provider",
    "Big data and analytics solutions",
    "Internet of Things (IoT) solutions",
    "Best custom software development company in [Your Location]",
    "AI-driven business automation solutions",
    "Affordable cloud computing services for startups",
    "Top enterprise software solutions for SMEs",
    "How to choose the right IT consulting firm",
    "Cybersecurity best practices for businesses",
    "Benefits of AI in business transformation",
    "Custom mobile app development for enterprises",
    "How blockchain is transforming digital security",
    "Best SaaS solutions for small businesses",
    "ISentry Technologies software solutions",
    "ISentry Technologies IT consulting",
    "ISentry Technologies AI services",
    "ISentry Technologies cloud computing",
    "ISentry Technologies digital transformation",
    "ISentry Technologies",
    "ISentry Tech",
    "Isentry Technologies",
    "I-Sentry Technologies",
    "ISentry",
  ],
  openGraph: {
    locale: "en_US",
    type: "website",
    siteName: "ISentry Technologies",
    url: "https://isentrytechnologies.com",
    title: "ISentry Technologies — Pioneering the Digital Frontier",
    description:
      "Discover the amazing potential of your business with our creative solutions and global expertise, crafted to support you as you navigate the exciting digital landscape of the future!",
    images: [
      {
        url: "https://isentrytechnologies.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fisentry-ab.1851b683.webp&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "ISentry Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISentry Technologies — Pioneering the Digital Frontier",
    description:
      "Discover the amazing potential of your business with our creative solutions and global expertise, crafted to support you as you navigate the exciting digital landscape of the future!",
    images: [
      "https://isentrytechnologies.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fisentry-ab.1851b683.webp&w=3840&q=75",
    ],
  },
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
