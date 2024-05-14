import { FC, PropsWithChildren } from "react"


const UsersLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <div className="grid grid-cols-12 place-items-center w-full mt-2">
        
        <div className="col-span-6">
          <h2 className=" text-9xl">The</h2>
          <h2 className=" text-6xl">Red</h2>
          <h2 className=" text-6xl">Social</h2>          
        </div>


        <div className="col-span-6 w-full">{children}</div>          
      </div>
    </>

  )
}

export default UsersLayout