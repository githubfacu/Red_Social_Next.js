import { FC, PropsWithChildren } from "react"


const UsersLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
        <div>Personal account</div>

        <div>{children}</div>

        <div>Layout</div>
    </>

  )
}

export default UsersLayout