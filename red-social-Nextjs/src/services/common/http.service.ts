import { URLSearchParams } from "url"

const API_URL = 'http://localhost:8080/api'
const API_PUBLIC_ENDPOINT = `/public`


export const httpGet = async <T>(endpoint: string, params? : URLSearchParams): Promise<T> => {

    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`,{
        cache: 'no-cache'
    })
    if (!res.ok) {
        throw new Error ('Error en la solicitud: ' + endpoint)
    }
    return res.json()
}

export const httpPost = async <T>(endpoint: string, body: object): Promise<T> => {

    const res = await fetch(`${API_URL}${endpoint}`,{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIERldGFpbHMiLCJpc3MiOiJzb2NpYWwtYXBpIiwiaWF0IjoxNjkxNTE2MTY0LCJ1c2VybmFtZSI6Ik9iaVdhbiJ9.69rRMYfcoNj4BEarf4ZGD0T5Byx9b-zkTCGoeBWuKCg'
        }
    })
    if (!res.ok) {
        throw new Error ('Error en la solicitud: ' + endpoint)
    }
    return res.json()
}

export const httpGetPublic = async <T>(endpoint: string, params? : URLSearchParams): Promise<T> => {

    return httpGet(`${API_PUBLIC_ENDPOINT}${endpoint}`, params)
}

