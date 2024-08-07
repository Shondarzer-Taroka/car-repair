import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import Footer from "@/Components/Shared/Footer/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car doctor pro",
  description: "Car repair app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='mytheme'>
        <body className={inter.className}>
      <AuthProvider>     
        <NavBar></NavBar>
        <div className="">
          {children}
          <Footer></Footer>
        </div>
      </AuthProvider>
      </body>
    </html>
  );
}
