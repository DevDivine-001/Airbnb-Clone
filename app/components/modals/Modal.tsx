'use client'

import {useCallback, useEffect, useState} from "react"
import { IoMdClose } from "react-icons/io";
import Button from "../Button";


interface ModalProps{
    isOpen?: boolean;
    onClose: ()  => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel



}) => {

    const [showModal, setShowModal]  = useState(isOpen)
    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() =>{
      if(disabled){
        return
      }
        setShowModal(false)
        setTimeout(() =>{
          onClose();
        }, 270)
    }, [disabled,onClose]);

    const handleSubmit = useCallback(() =>{
      if(disabled){
        return;
      }

      onSubmit();
    }, [disabled, onSubmit])


    const handleSecondaryAction = useCallback(() =>{
      if(disabled || !secondaryAction){
        return;
      }
      secondaryAction();
    }, [disabled,secondaryAction]);
    if(!isOpen){
      return null;
    }
    
  return (
    <>
      <div className="
      justify-center
      flex
      items-center
      overflow-x-hidden
      overflow-y-auto
      fixed
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-neutral-800/70">
        <div
        className="relative
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        lg:h-auto
        md:h-auto">
          {/* Content */}
          <div className={`
          translate
          duration-300
          h-full
          ${showModal ? 'translate-y-0' : 'translate-y-full'}
          `}
          >
            <div
            className="
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex
            flex-col
            w-full
            bg-[#ffff]
            outline-none
            focus:outline-none"
            >
              {/* Header */}
              <div className="
              flex
              items-center
              p-4
              rounded-t
              justify-center
              relative
              border-b-[1px]">
                <button
                onClick={handleClose} 
                className="
                p-1
                border-0
                hover:opacity-70
                transition
                absolute
                left-9"
                
                >
                  <IoMdClose size={18}/>

                </button>
                <span className="
                text-lg font-semibold">{title}</span>
                {/* Body */}
                </div>
                <div className="
                relative p-4 flex-auto">
                  {body}
                </div>
                {/* Footer */}
                <footer className="flex flex-col gap-2 p-6">
                  <div
                  className="flex
                  flex-row
                  items-center
                  gap-3
                  w-full">
               { secondaryAction &&secondaryActionLabel &&(
                    <Button
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                  /> 
               )}
                   <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  /> 

                  </div>
                {footer}
                </footer>




            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Modal

// 'use client'

// import { useCallback, useEffect, useState } from "react";
// // import { setTimeout } from "timers/promises";

// interface ModalProps{
//   isOpen?: boolean;
//   onClose: () => void;
//   onSubmit: () => void;
//   title?: string;
//   body?: React.ReactElement;
//   footer?: React.ReactElement;
//   actionLabel: string;
//   disabled?: boolean;
//   secondaryAction?: () => void;
//   secondaryLabel?: string;
// }

// const Modal: React.FC<ModalProps> = ({
//   isOpen,
//   onClose,
//   onSubmit,
//   title,
//   body,
//   footer,
//   actionLabel,
//   disabled,
//   secondaryAction,
//   secondaryLabel,

// }) => {
//   const [showModal, setShowModal ] = useState(isOpen)

//   useEffect(() =>{
//     setShowModal(isOpen)
//   }, [isOpen]);

//   const handleClose = useCallback(() =>{
//     if(disabled){
//       return;
//     }

//     setShowModal(false);
//     setTimeout(() => {
//       onClose();
//     }, 300)
   
//   }, [disabled, onClose])

//   const handleSubmit = useCallback(() => {

//   }, [])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Modal
