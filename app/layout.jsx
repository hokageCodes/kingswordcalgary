import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "KingsWord Church Calgary",
  description: "Home of the Supernatural",
  icons: {
    icon: [
      {
        url: '/assets/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/assets/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className} pt-24`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
