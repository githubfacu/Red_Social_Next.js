'use client'
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import authApi from "@/services/auth/auth.api";
import { useState } from "react";
import { AccesoDenegado } from "@/services/common/http.errors";
import { useRouter } from "next/navigation";

type FormData = {
    username: string;
    password: string;
}

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
}).required()

const LoginForm = () => {

    const router = useRouter()
    const [serverError, setServerError] = useState<string | null>(null)
    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const {handleSubmit} = methods

    const onSubmit = async (data: FormData) => {
      setServerError(null)
      try{
        const loginResponse = await authApi.login(data.username, data.password)
        console.log(JSON.stringify(loginResponse));
        router.push('/')
      }
      catch(e){
        if(e instanceof AccesoDenegado){
          setServerError('Las credenciales no son válidas')
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
          <h2>Iniciar Sesión</h2>

          <InputText label={"Nombre de usuario"}
            fieldName={"username"}
            type={"text"}
          />
          <InputText label={"Contraseña"}
            fieldName={"password"}
            type={"password"}
            styles="mt-2"
          />

          <SubmitButton label={"Iniciar sesión"} onSubmit={onSubmit} styles="mt-4"/>

          {
            serverError && 
            <p className="text-red-600 mt-4">{serverError}</p>
          }
        </form>
      </FormProvider>
    </>
  )
}

export default LoginForm