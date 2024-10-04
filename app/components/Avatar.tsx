'use client'

interface iAvatarProps {
  src: string | null | undefined
}

import Image from "next/image"
const Avatar: React.FC<iAvatarProps> = (
  {src}
) => {
  // console.log(src)
  return (
<>
   <Image
   className="rounded-full"
   height="40"
   width="40"
   alt="Avatar"
   src={src || "/image/profile.png"}
   />
</>
  )
}

export default Avatar
