import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  metadataBase: new URL("https://gcsolutionsnv.com"),
  title: {
    default: "GC Business Solutions - Certified NetSuite Support",
    template: "%s | GC Business Solutions",
  },
  description:
    "Expert Certified NetSuite Support. Get fast, reliable, and professional assistance for your NetSuite environment.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GC Business Solutions",
    title: "GC Business Solutions - Certified NetSuite Support",
    description:
      "Expert Certified NetSuite Support. Get fast, reliable, and professional assistance for your NetSuite environment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GC Business Solutions - Certified NetSuite Support",
    description:
      "Expert Certified NetSuite Support. Get fast, reliable, and professional assistance for your NetSuite environment.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`${dmSans.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
