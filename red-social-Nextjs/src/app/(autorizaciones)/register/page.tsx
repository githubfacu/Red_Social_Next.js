import RegisterForm from "@/components/auth/RegisterForm"
import Link from "next/link"


const RegisterPage = () => {

  
  return (
    <div>
      <RegisterForm />
      <Link href='/login'>
        <h3 className="mt-2 cursor-pointer">Ya tienes una cuenta? Inicia sesión!</h3>
      </Link>
    </div>
  )
}

export default RegisterPage