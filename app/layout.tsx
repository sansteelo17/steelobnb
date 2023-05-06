import RegisterModal from "./components/Modal/RegisterModal";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Steelobnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
