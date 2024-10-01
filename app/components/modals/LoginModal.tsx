'use client'
import {signIn} from "next-auth/react"
// import  axios from "axios"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { 
  // useCallback,
   useState } from "react"
import {
  FieldValues,
  SubmitHandler,
  useForm

} from "react-hook-form"
import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../input/Input"
import toast from "react-hot-toast"
import Button from "../Button"
import useRegisterModal from "../hooks/useRegisterModal"
import useLoginModal from "../hooks/useLoginModal"
import { useRouter } from "next/navigation"


const LoginModal = () => {
  const router = useRouter()
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues:{
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) =>{
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false
    })
    .then((callback) =>{
      setIsLoading(false)

      if(callback?.ok){
        toast.success('Logged in')
        router.refresh();
        loginModal.onClose()
      }
      if(callback?.error){
        toast.error(callback.error)
      }
    })

    // axios.post('/api/register', data).then(() =>{
    //   registerModal.onClose()
    // }).catch((error) =>{
    // toast.error('Something went wrong')
      
    // }).finally(() =>{
    //   setIsLoading(false)
    // })
    
  }
  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading 
      title="Welcome back"
      subtitle="Login to your account"/>
      <Input  
      id="email"
      label="Email"
      disabled={isLoading}
      register={register}
      errors={errors}
      required/>
      {/* <Input  
      id="name"
      label="Name"
      disabled={isLoading}
      register={register}
      errors={errors}
      required/> */}
      <Input  
      id="password"
      label="Password"
      type="password"
      disabled={isLoading}
      register={register}
      errors={errors}
      required/>
    </div>
  )
  const footerContent = (
    <div className="flex flex-col gap-2 mt-2">
      <hr />
      <Button
      outline
      label="Continue with Google"
      icon={FcGoogle}
      onClick={() =>{}}
      
      />
      <Button
      outline
      label="Continue with Github"
      icon={AiFillGithub}
      onClick={() =>{}}
      
      />
      <div className="
      text-neutral-500
      text-center
      mt-2
      font-light">
        <div className="flex text-center justify-center gap-2">
          <div>
            Already have an account
          </div>
          <div
          onClick={registerModal.onClose}
          className="
          text-neutral-800
          cursor-pointer
          hover:underline">
            Log in
          </div>
        </div>
       

      </div>
    </div>
  )
  return (
  <Modal
  disabled={isLoading}
  isOpen={loginModal.isOpen}
  title="Login"
  actionLabel="Continue"
  onClose={loginModal.onClose}
  onSubmit={handleSubmit(onSubmit)}
  body={bodyContent}
  footer={footerContent}
  
  />
  )
}

export default LoginModal