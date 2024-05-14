import { AccesoDenegado } from '@/services/common/http.errors'
import * as yup from "yup"
import authService from '@/services/auth/auth.service';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
}).required()

export async function POST(request: Request) {

    const {username, password} = await schema.validate(await request.json())

    try{
        const loginResponse = await authService.autenticacion(username, password)

        const authCookie = `SocialSessionID=${loginResponse.sessionId}; Expires=${loginResponse.expiracion}; Domain=localhost; HttpOnly; Path=/`

        return new Response(JSON.stringify(loginResponse.user) , {
            status: 200,
            headers: { 'Set-Cookie': authCookie },
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