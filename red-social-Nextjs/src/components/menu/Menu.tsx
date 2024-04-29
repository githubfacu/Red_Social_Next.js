import { LinkType } from "@/types/link.types"
import Link from "next/link"

type MenuProps = {
    links: LinkType[]
}

const Menu = ({links}: MenuProps) => {

    return <nav className="flex flex-col w-full">
        <ul className="gap-4 mb-4 w-full">

            {
                links && links.map((link, index) =>
                    <li key={`menu-link-${index}`} className="text-2xl w-full hover:bg-blue-500 hover:text-white">
                        <Link className="w-full flex p-2" href={link.href}>
                            {link.title}
                        </Link>
                    </li>
                )
            }

        </ul>
        <button className="button-primary uppercase font-semibold">Postear</button>
    </nav>
}

export default Menu