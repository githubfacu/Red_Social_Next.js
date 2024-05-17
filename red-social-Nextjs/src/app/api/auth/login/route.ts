import { AccesoDenegado } from '@/services/common/http.errors'
import authService from '@/services/auth/auth.service';
import LoginSchema from '@/schemes/login.scheme';
import { cookies } from 'next/headers';


export async function POST(request: Request) {

    const {username, password} = await LoginSchema.validate(await request.json())

    try{
        const loginResponse = await authService.autenticacion(username, password)

        cookies().set('SocialSessionID', loginResponse.sessionId, {
            expires: loginResponse.expiracion,
            httpOnly: true,
            secure: true,
            domain: 'localhost',
            path: '/'
        })
        cookies().set('SocialUsername', loginResponse.user.username, {
            expires: loginResponse.expiracion,
            httpOnly: false,
            secure: true,
            domain: 'localhost',
            path: '/'
        })
        
        return new Response(JSON.stringify(loginResponse.user) , {
            status: 200
        })

    } catch (e){
        if (e instanceof AccesoDenegado) {
            return new Response(JSON.stringify({error: 'Acceso denegado'}), {
                status: 403
            })
        }
        else{
            return new Response(JSON.stringify('Algo salió mal'), {
                status: 500
            })
        }
    }

}