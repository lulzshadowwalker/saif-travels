import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/shared/header";
import { Footer } from "@/shared/footer";

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Saif | Travel and Tourism",
  description:
    "Discover the best of Jordan's tourism with a focus on healing and wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tajawal.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
