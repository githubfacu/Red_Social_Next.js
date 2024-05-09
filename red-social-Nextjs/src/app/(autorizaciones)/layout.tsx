import { FC, PropsWithChildren } from "react"


const UsersLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <div className="grid grid-cols-12 place-items-center w-full mt-2">
        
        <h1 className="col-span-4">The Red Social</h1>

        <div className="col-span-8 w-full">{children}</div>          
      </div>
    </>

  )
}

export default UsersLayout