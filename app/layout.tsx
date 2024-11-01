
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
import SearchModel from "./components/modals/SearchModel";
// import ClientOnly from "./components/ClientOnly";
// import Openpages from "./components/Openpages";



export const metadata: Metadata = {
  title: "Airbnb Webapp",
  description: "Airbnb clone ",

  icons:{
    icon:"../../public/image/logo.png"
  }
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
        <SearchModel/>
        <RentModal/>
        {/* <Openpages/> */}
         <LoginModal/>
         <RegisterModal/>
         <Navbar currentUser={currentUser}/>
       {/* </ClientOnly> */}
        <div className="pb-20 pt-28">
        {children}

        </div>
        </body>
    </html>
  );
}
