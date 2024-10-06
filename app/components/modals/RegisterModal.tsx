'use client'
import axios from "axios";
import { toast } from "react-hot-toast"; // For notifications
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { 
  // useCallback, 
  useState } from "react";
import useRegisterModal from "../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../input/Input";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('Successfully registered!');
        registerModal.onClose();
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          toast.error('User already exists');
        } else {
          toast.error('Something went wrong');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-2 mt-2">
      <hr />
      <Button outline 
      label="Continue with Google" 
      icon={FcGoogle} 
      onClick={() => signIn("google")} />
      <Button outline 
      ssssssss
      label="Continue with Github" 
      icon={AiFillGithub} 
      onClick={() => signIn("github")} />

      <div className="text-neutral-500 text-center mt-2 font-light">
        <div className="flex justify-center gap-2">
          <div>Already have an account?</div>
          <div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline">
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;