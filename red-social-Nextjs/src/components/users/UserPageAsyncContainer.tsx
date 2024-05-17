import UserTabs from "@/components/users/UserTabs"
import userApi from "@/services/users/users.service"
import Image from "next/image"
import Link from "next/link"

type UserPageContainerProps = {
    username: string
}

const UserPageAsyncContainer = async ({username} : UserPageContainerProps) => {

    const userPromise = userApi.getUserData(username)
    const userMessagesPromise = userApi.getUserMessages(username)
    const userMessageRepliesPromise = userApi.getUserMessageReplies(username)
    const userFollowersPromise = userApi.getUserFollowers(username)
    const userFollowingPromise = userApi.getUserFollowing(username)

  
    const [user, userMessages, userMessageReplies, userFollowing, userFollowers] = await Promise.all([userPromise, userMessagesPromise, userMessageRepliesPromise, userFollowersPromise, userFollowingPromise])
  
    return (
      <main className="flex flex-col bg-gray-200 p-8">
  
        <section  className="flex flex-col mb-8">
            <div className="rounded-full text-center mb-4 block relative w-20 h-20">
              <Image
                className="rounded-full"
                src={user.photoUrl}
                alt="imagen-perfil"
                fill
                priority
              />
            </div>
            <h2 className="mb-1">
              {user.name}
            </h2>
            <div className="text-md mb-4 text-gray-600 cursor-pointer">
              @<Link href={`/users/${user.username}`}>{user.username}</Link>
            </div>
            <div className="mb-4">
              {user.bio}
            </div>
  
            <div className="flex justify-between mb-4">
              <div><span className="font-semibold">{user.followersCount}</span> Seguidores</div>
              <div><span className="font-semibold">{user.followingCount}</span> Siguiendo</div>
            </div>
        </section>
  
        <UserTabs messages={userMessages.content} replies={userMessageReplies.content} followers={userFollowers.content} following={userFollowing.content}/>
  
      </main>
    )
}

export default UserPageAsyncContainer