import UserPageAsyncContainer from "@/components/users/UserPageAsyncContainer"


const UserPage = async ({params}: {params: {username: string}}) => {

  return (
    <UserPageAsyncContainer username={params.username} />
  )
}

export default UserPage