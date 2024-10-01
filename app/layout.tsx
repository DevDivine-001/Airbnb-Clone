
// import Modal from "./components/modals/Modal";
import { Metadata } from "next";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import {Nunito} from "next/font/google"
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";


export const metadata: Metadata = {
  title: "Airbnb Webapp",
  description: "Airbnb clone ",
};

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
       {/* <ClientOnly> */}
       
        {/* <Modal title="Hello world"  isOpen actionLabel="Submit"/> */}
        <ToasterProvider/>
         <Navbar/>
         <LoginModal/>
         <RegisterModal/>
       {/* </ClientOnly> */}
        
        {children}</body>
    </html>
  );
}
