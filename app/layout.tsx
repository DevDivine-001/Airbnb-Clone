
// import Modal from "./components/modals/Modal";
import { Metadata } from "next";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import {Nunito} from "next/font/google"
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";


export const metadata: Metadata = {
  title: "Airbnb Webapp",
  description: "Airbnb clone ",
};

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser()
  console.log({currentUser})
  return (
    <html lang="en">
      <body className={font.className}>
       {/* <ClientOnly> */}
       
        {/* <Modal title="Hello world"  isOpen actionLabel="Submit"/> */}
        <ToasterProvider/>
        <RentModal/>
         <LoginModal/>
         <RegisterModal/>
         <Navbar currentUser={currentUser}/>
       {/* </ClientOnly> */}
        
        {children}</body>
    </html>
  );
}
