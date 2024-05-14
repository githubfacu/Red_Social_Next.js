import UserPageAsyncContainer from '@/components/users/UserPageAsyncContainer';
import userApi from '@/services/users/users.service';
import { headers } from 'next/headers';


const ProfilePage = async () => {

    const accessToken = headers().get('x-social-access-token') ?? ''
    const me = await userApi.getMeInternal(accessToken)

  return (
    <UserPageAsyncContainer username={me.username} />
  )
}

export default ProfilePage