import Message from "@/components/messages/Message"
import UserTabs from "@/components/users/UserTabs"
import Image from "next/image"
import Link from "next/link"
import profilePic from '../../../../../public/rocky_raccoon.jpg'

const UserPage = ({params}: {params: {username: String}}) => {

  const user = {
    username: params.username,
    name: 'Rocky Raccoon',
    bio: `Now somewhere in the Black Mountain Hills of Dakota \nThere lived a young boy named Rocky Raccoon \nAnd one day his woman ran off with another guy \nHit young Rocky in the eye \n \nRocky didn't like that \nHe said, "I'm gonna get that boy" \n So one day he walked into town \n Booked himself a room in the local saloon`,
    followersCount: 15,
    followingCount: 3,
    messages: [
      {
        user: 'Rocky Raccoon',
        username: 'RockyRaccoon',
        message: `"Danny boy, this is a showdown"`,
        repliesCount: 13
      },
      {
        user: 'Doctor',
        username: 'Doc',
        message: `"Rocky, you met your match"`,
        repliesCount: 16
      }
    ],
    replies: [
      {
        message: `"Doc, it's only a scratch. And I'll be better, I'll be better, Doc, as soon as I am able"`,
        repliesCount: 0
      }
    ]
  }


  return (
    <main className="flex flex-col bg-gray-200 p-8">

    <section  className="flex flex-col mb-8">
        <div className="rounded-full text-center mb-4 block relative w-20 h-20">
          <Image
            className="rounded-full"
            src={profilePic}
            alt="Claudia"
            fill
            priority
            placeholder="blur"
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

    <UserTabs messages={user.messages} replies={[]}/>

    </main>
  )
}

export default UserPage