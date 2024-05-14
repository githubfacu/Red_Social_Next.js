import { RedisClientType, createClient } from 'redis';
import { AccesoDenegado } from '../common/http.errors';
import { AuthResponseType } from '@/types/auth.types';
import { v4 as uuidv4 } from 'uuid';
import authApi from './auth.api';

const TEN_MINUTE = 60 * 10

class AuthService {

    private client: RedisClientType

    constructor(){

        this.client = createClient({
            url: 'redis://default:SocialNetworkPass@localhost:6379'
        });

        // this.client = createClient()

        this.client.connect().then(() => {
            console.log('Conectado a Redis');
        })
    }

    async autenticacion(username: string, password: string): Promise<AuthResponseType>{

        const loginResponse = await authApi.loginInternal(username, password)
        const sessionId = uuidv4()
        const now = new Date()
        const expiracion = new Date(now.getTime() + TEN_MINUTE * 1000).toUTCString()
    
        this.client.set(sessionId, loginResponse.accessToken, {EX: TEN_MINUTE})
    
        return {
            sessionId: sessionId,
            expiracion: expiracion,
            user: loginResponse.user
        }
    }

    async getAccessToken(sessionId?: string): Promise<string>{
        if (!sessionId) {
            throw new AccesoDenegado('Acceso denegado, no hay Id de sesión')
        }
        const accessToken = await this.client.get(sessionId)
        if (!accessToken) {
            throw new AccesoDenegado('Acceso denegado')
        }
        return accessToken
    }

    async getRedisValue(key: string): Promise<string | null>{
        return await this.client.get(key)
    }
}


const authService = new AuthService()

export default authService