import { Inter } from "next/font/google";
import "./global.css";
import Header from "@/components/thailand/common/Header";
import Footer from "@/components/thailand/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'E-Visa ',
};

export default function RootLayout({ children }) {
  return <>
    <Header />
    {children}
    <Footer />
  </>
}
