type UserBase = {
    id: string;
	username: string;
	name: string;
	photoUrl: string;
}

export type TrendingUserType = UserBase & {
	count: number;
}


export type UserType = UserBase & {
	bio: string;
	createdAt: string;
	followersCount: number;
	followingCount: number;
	messageCount: number
}