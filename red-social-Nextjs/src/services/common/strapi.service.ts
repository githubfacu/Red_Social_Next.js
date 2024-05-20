import { URLSearchParams } from "url"

const API_URL = process.env.STRAPI_API_URL
const URL = process.env.STRAPI_URL

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

export const getCoverImg = (url?: string) => {
    const cover = `${URL}${url}`

    if (!url) {
        return undefined
    }else{
        return cover
    }
  }