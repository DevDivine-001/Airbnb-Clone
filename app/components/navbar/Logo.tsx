'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()
  return (
 <div className="flex items-center justify-center gap-1 cursor-pointer">
      <Image
      onClick={() => router.push('/')}
   alt="Logo"
   className="hidden md:block cursor-pointer"
   height="30"
   width="28"
   
   src="/image/logo.png"
   
   />
   <span
   onClick={() => router.push("/")}
   className="text-rose-500 font-extrabold text-sm sm:text-xl hidden md:block justify-center items-center">airbnb</span>
 </div>

  )
}

export default Logo
