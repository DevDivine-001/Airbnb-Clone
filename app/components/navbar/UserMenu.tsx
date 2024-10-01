'use client'

import { AiOutlineMenu } from "react-icons/ai"
import { useCallback, useState } from "react"
import Avatar from "../Avatar"
import MenuItem from "./MenuItem"
import useRegisterModal from "../hooks/useRegisterModal"
import useLoginModal from "../hooks/useLoginModal"
// import useRegisterModal from "../hooks/useRegisterModal"
// import useLoginModal from "../hooks/useRegisterModal"

const UserMenu = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() =>{
setIsOpen((value) =>!value)
    },[] )
  return (
    <div className="relative">
        <div    className=" flex flex-row
            items-center
            gap-3">
                <div
                onClick={() =>{}}
                className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            transition
            cursor-pointer
            hover:bg-neutral-100"
                
                >
                      Airbnb your home
                </div>
               <div
            onClick={toggleOpen}
            className="
                py-0
                px-2
                max-sm:py-2
                

              
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-2
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition"
          >
            <AiOutlineMenu size={20} />
            <div
              className="hidden
md:block"
            >
              <Avatar />
            </div>
          </div>

        </div>
      {
        isOpen && (
            <div className="
            
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-[#fff]
            overflow-hidden
            right-0
            top-[61px]
            text-sm">
                <div className="flex flex-col cursor-pointer">
<>
<MenuItem onClick={loginModal.onOpen}
label="Login"
/>
<MenuItem onClick={registerModal.onOpen}
label="Sign up"
/>
{/* <MenuItem onClick={() => {}}
label="My trips"
/>
<MenuItem onClick={() => {}}
label="My favorites"
/>
<MenuItem onClick={() => {}}
label="My reservations"
/>
<MenuItem onClick={() => {}}
label="My properties"
/>
<MenuItem onClick={() => {}}
label="Airbnb my home"
/> */}
</>
                </div>

            </div>
        )
      }
    </div>
  )
}

export default UserMenu
