import { Inter } from 'next/font/google';
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "APPER - Best way to manage your customers",
  description: "A modern app for managing customers and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
