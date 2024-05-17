import { ConflictError } from '@/services/common/http.errors'
import authService from '@/services/auth/auth.service';
import RegisterSchema from '@/schemes/register.scheme';
import { cookies } from 'next/headers';


export async function POST(request: Request) {

    const {username, password, name, photoUrl} = await RegisterSchema.validate(await request.json())

    try{
        const registerResponse = await authService.register(username, password, name, photoUrl)

        cookies().set('SocialSessionID', registerResponse.sessionId, {
            expires: registerResponse.expiracion,
            httpOnly: true,
            secure: true,
            domain: 'localhost',
            path: '/'
        })
        cookies().set('SocialUsername', registerResponse.user.username, {
            expires: registerResponse.expiracion,
            httpOnly: false,
            secure: true,
            domain: 'localhost',
            path: '/'
        })

        return new Response(JSON.stringify(registerResponse.user) , {
            status: 200
        })

    } catch (e){
        if (e instanceof ConflictError) {
            return new Response(JSON.stringify({error: 'El usuario: '+ username +' ya existe'}), {
                status: 409
            })
        }
        else{
            return new Response(JSON.stringify('Algo salió mal'), {
                status: 500
            })
        }
    }

}