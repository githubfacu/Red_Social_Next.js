import { TrendingUserType, UserType } from "@/types/user.types"
import Image from "next/image"
import Link from "next/link"
import { PropsWithChildren } from "react"

export enum UserCardLayout {
    HORIZONTAL,
    VERTICAL
}

const divClasses = {
    [UserCardLayout.HORIZONTAL]: 'flex',
    [UserCardLayout.VERTICAL]: 'flex flex-col'
}

const linkClasses = {
    [UserCardLayout.HORIZONTAL]: 'ml-2 text-md text-gray-600 cursor-pointer',
    [UserCardLayout.VERTICAL]: 'text-md text-gray-600 cursor-pointer'
}

type UserCardProps = PropsWithChildren & {
    user: TrendingUserType | UserType,
    layout: UserCardLayout
}

const UserCard = ({user, layout, children} : UserCardProps) => {

  return (
    <div className="grid grid-cols-12 mb-4">
        <div className="w-full h-full mt-1 mb-4 text-center relative col-span-2 flex items-center justify-center">
        <Image
            className="rounded-full"
            src={user.photoUrl}
            alt={user.username}
            priority
            width={60}
            height={60}
        />
        </div>

        <div className="flex flex-col ml-4 mt-2 col-span-10">
            <div className={divClasses[layout]}>
                <h3>
                    {user.name}
                </h3>
                <div className={linkClasses[layout]}>
                    @<Link href={`/users/${user.username}`}>{user.username}</Link>
                </div>
            </div>
            {children}
        </div>
    </div>
  )
}

export default UserCard