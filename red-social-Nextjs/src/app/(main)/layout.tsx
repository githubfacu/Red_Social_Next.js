import Menu from "@/components/menu/Menu"
import Link from "next/link"
import { FC, PropsWithChildren } from "react"

const LINKS = [
  {title: 'Inicio', href: '/'},
  {title: 'Explorar', href: '/explorar'},
  {title: 'Perfil', href: 'mi-perfil'}
]

const UsersLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-12">
        <div className="w-full col-span-3">
          <Menu links={LINKS}/>
        </div>

        <div className="w-full col-span-6">{children}</div>

        <div className="w-full col-span-3">Pie de Pagina Main Layout</div>        
      </div>
    </>

  )
}

export default UsersLayout