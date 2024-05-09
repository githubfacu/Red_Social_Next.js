'use client'
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";

type FormData = {
    username: string;
    password: string;
}

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

const LoginForm = () => {

    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const {handleSubmit} = methods

    const onSubmit = (data: FormData) => {
        console.log(JSON.stringify(data));
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
        </form>
      </FormProvider>
    </>
  )
}

export default LoginForm