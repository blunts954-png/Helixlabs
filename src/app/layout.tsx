import type { Metadata } from "next";
import { StoreProvider } from "@/context/StoreContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "HELIX LABS | Advanced Research Peptides & Biochemicals",
  description: "High-purity research compounds for laboratory use. Optimized for consistency, transparency, and rigorous analytical research. Serving global research facilities with localized pickup hubs.",
  keywords: ["peptides", "BPC-157", "MOTS-C", "research chemicals", "biochemicals", "lab grade", "HPLC tested"],
  openGraph: {
    title: "HELIX LABS | Protocol for Purity",
    description: "The standard in high-fidelity research compounds.",
    images: ['/logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "HELIX LABS | Laboratory Research Only",
    description: "High-purity verified research peptides.",
    images: ['/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <StructuredData />
      </head>
      <body>
        <StoreProvider>
          <SplashScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}



