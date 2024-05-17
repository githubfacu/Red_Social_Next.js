'use client'
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import RegisterSchema from "@/schemes/register.scheme";
import { useRouter } from "next/navigation";
import { useState } from "react";
import authApi from "@/services/auth/auth.api";
import { ConflictError } from "@/services/common/http.errors";

type FormData = {
    username: string;
    password: string;
    name: string;
    photoUrl: string;
}

const RegisterForm = () => {

  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)
  const methods = useForm<FormData>({
    resolver: yupResolver(RegisterSchema)
  })

  const {handleSubmit} = methods

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    try{
      const loginResponse = await authApi.register(data.username, data.password, data.name, data.photoUrl)
      console.log(JSON.stringify(loginResponse));
      router.push('/')
      router.refresh()
    }
    catch(e){
      if(e instanceof ConflictError){
        setServerError('El usuario: '+ data.username +' ya existe')
      }
      else{
        setServerError('Ha ocurrido un error, intente más tarde')
      }
    }

      return false
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-72">
          <h2>Crea una cuenta</h2>

          <InputText label={"Nombre completo"}
            fieldName={"name"}
            type={"text"}
          />
          <InputText label={"Foto de perfil (URL)"}
            fieldName={"photoUrl"}
            type={"text"}
            styles="mt-2"
          />
          <InputText label={"Nombre de usuario"}
            fieldName={"username"}
            type={"text"}
            styles="mt-2"
          />
          <InputText label={"Contraseña"}
            fieldName={"password"}
            type={"password"}
            styles="mt-2"
          />

          <SubmitButton label={"Crear cuenta"} onSubmit={onSubmit} styles="mt-4"/>
          {
            serverError && 
            <p className="text-red-600 mt-4">{serverError}</p>
          }
        </form>
      </FormProvider>
    </>
  )
}

export default RegisterForm