import LoginForm from "@/components/auth/LoginForm"
import Link from "next/link"

const LoginPage = () => {


  return (
    <div>
      <LoginForm />
      <Link href='/register'>
        <h3 className="mt-2 cursor-pointer">No tienes una cuenta? Regístrate!</h3>
      </Link>
      </div>
  )
}

export default LoginPage