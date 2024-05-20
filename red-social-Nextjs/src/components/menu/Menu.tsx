'use client'
import { LinkType } from "@/types/link.types"
import Link from "next/link"
import { useRouter } from "next/navigation"

type MenuProps = {
    links: LinkType[]
}

const Menu = ({links}: MenuProps) => {

    const router = useRouter()

    const goToLink = (href: string) => {
        router.push(href)
        router.refresh()
      }

    return <nav className="flex flex-col w-full fixed" style={{ maxWidth: 'calc((100% / 12) * 1.9)' }}>
        <ul className="gap-4 mb-2 w-full">
            {
                links && links.map((link, index) =>
                    <li key={`menu-link-${index}`} className="text-2xl w-full hover:bg-blue-500 hover:text-white">
                        <div className="w-full flex p-2 cursor-pointer" 
                            onClick={() => goToLink(link.href)}
                        >
                            {link.title}
                        </div>
                    </li>
                )
            }
        </ul>
        <Link href='/merchandising'>
            <div className="link-primary mt-1">
              Merchandising
            </div>
        </Link>        
        <Link href='/faq'>
            <div className="link-primary mt-1">
              Preguntas frecuentes
            </div>
        </Link>

    </nav>
}

export default Menu