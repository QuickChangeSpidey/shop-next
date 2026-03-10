import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopNext",
  description: "Your one-stop shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}