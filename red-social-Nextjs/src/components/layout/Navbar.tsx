import Link from "next/link"


const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="w-full bg-blue-600 text-white p-2 mb-2 flex">
        <Link href='/explore'>
          <div className="px-4 py-1">
            LOGO
          </div> 
        </Link>
      </nav>
    </header>
  )
}

export default Navbar