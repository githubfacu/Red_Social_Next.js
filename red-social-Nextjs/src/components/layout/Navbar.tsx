'use client'
import authApi from "@/services/auth/auth.api"
import Link from "next/link"
import { useRouter } from "next/navigation"

type NavbarProps = {
  loggedUsername?: string
}

const Navbar = ({loggedUsername}: NavbarProps) => {

  const router = useRouter()

  const logout = async () => {
    await authApi.logout()
    router.push('/login')
    router.refresh()
  }
  
  return (
    <header className="w-full fixed z-50">
      <nav className="flex justify-between items-center w-full bg-blue-600 text-white p-2 mb-2">
        <Link href='/explore'>
          <div className="px-4 py-1">
            The Red Social
          </div> 
        </Link>
        {
          loggedUsername &&
          <div>
            <button className="px-4 py-1" onClick={logout}>Cerrar sesión</button>
          </div>          
        }

      </nav>
    </header>
  )
}

export default Navbar