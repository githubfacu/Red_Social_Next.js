import { URLSearchParams } from "url"

const API_URL = 'http://127.0.0.1:1337/api'

export const strapiGet = async <T>(endpoint: string, params? : URLSearchParams): Promise<T> => {

    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`,{
        headers: {
            'Authorization': `Bearer ${process.env.CMS_STRAPI_TOKEN}`
        },
        cache: 'no-cache'
    })
    if (!res.ok) {
        throw new Error ('Error en la solicitud strapi: ' + endpoint
        )
    }
    return res.json()

}