import UserPageAsyncContainer from '@/components/users/UserPageAsyncContainer';
import userApi from '@/services/users/users.service';
import { createClient } from 'redis';
import { cookies } from 'next/headers'

const client = createClient({
    url: 'redis://default:SocialNetworkPass@localhost:6379'
});

client.connect().then(() => {
    console.log('Conectado a Redis');
})


const ProfilePage = async () => {

    const cookieStore = cookies()
    console.log(cookieStore);
    
    const sessionId = cookieStore.get('SocialSessionID')
    console.log(sessionId);
    
    const accessToken = await client.get(sessionId?.value ?? '')

    if (!accessToken) 
        return new Response(JSON.stringify({error: 'Acceso denegado'}), {
            status: 403
        })
    

    const me = await userApi.getMeInternal(accessToken)

  return (
    <UserPageAsyncContainer username={me.username} />
  )
}

export default ProfilePage