import { FC, PropsWithChildren } from "react"


const UsersLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <div className="flex items-center w-full mt-2">
        
        <div className="flex flex-col mt-40 items-center w-[50%]">
          <h2 className=" text-9xl">The</h2>
          <h2 className=" text-6xl">Red</h2>
          <h2 className=" text-6xl">Social</h2>          
        </div>


        <div className="flex flex-col w-[50%] self-start">{children}</div>          
      </div>
    </>

  )
}

export default UsersLayout