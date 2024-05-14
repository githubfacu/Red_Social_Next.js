import { URLSearchParams } from "url"
import { AccesoDenegado } from "./http.errors"


export class HttpBaseAPI {

    protected privateEndpoint: string
    protected publicEndpointSufijo: string

    constructor(privateEndpoint: string, publicEndpointSufijo: string){
        this.privateEndpoint = privateEndpoint
        this.publicEndpointSufijo = publicEndpointSufijo
    }


    async httpGet<T>(endpointSufijo: string, params?: URLSearchParams, accessToken?: string): Promise<T>{

        const res = await fetch(`${this.privateEndpoint}${endpointSufijo}${params ? `?${params}` : ''}`,{
            cache: 'no-cache',
            headers: !accessToken ? {'Content-Type': 'application/json'} : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
        if (!res.ok) {
            throw new Error ('Error en la solicitud: ' + endpointSufijo)
        }
        return res.json()
    }

    async httpGetPublic<T>(endpointSufijo: string, params? : URLSearchParams): Promise<T>{
        return this.httpGet(`${this.publicEndpointSufijo}${endpointSufijo}`, params)
    }


    async httpPost<T>(endpointSufijo: string, body: object, accessToken?: string): Promise<T>{

        const res = await fetch(`${this.privateEndpoint}${endpointSufijo}`,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: !accessToken ? {'Content-Type': 'application/json'} : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
        if (!res.ok) {
            if (res.status === 403) {
                throw new AccesoDenegado('Acceso denegado')
            }
            throw new Error ('Error en la solicitud: ' + endpointSufijo)
        }
        return res.json()
    }

    async httpPostPublic<T>(endpointSufijo: string, body: object): Promise<T>{
        return this.httpPost(`${this.publicEndpointSufijo}${endpointSufijo}`, body)
    }
}










