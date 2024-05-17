import authService from '@/services/auth/auth.service';
import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server';


export async function POST(request: NextRequest) {

    try{
        const authCookie = request.cookies.get('SocialSessionID')
        if (authCookie) {
            const sessionId = authCookie.value
            await authService.logout(sessionId)
        }

        cookies().delete('SocialSessionID')
        cookies().delete('SocialUsername')


        return new Response(JSON.stringify({}) , {
            status: 200
        })

    } catch (e){
        return new Response(JSON.stringify('Algo salió mal'), 
        {
            status: 500
        })
    }
}