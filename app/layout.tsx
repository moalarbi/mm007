import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-arabic",
  weight: ["300", "400", "500", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "تأسيس شركة تسويق ونمو رقمي وحلول تقنية",
  description:
    "تصور إداري مختصر لتأسيس شركة متخصصة في التسويق الرقمي وبرمجة المواقع والأنظمة وتطبيقات الجوال في الرياض."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body>{children}</body>
    </html>
  );
}
