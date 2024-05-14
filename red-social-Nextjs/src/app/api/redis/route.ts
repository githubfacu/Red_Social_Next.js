import authService from '@/services/auth/auth.service';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {

    const headerList = headers()
    const authorization = headerList.get('authorization')
    if (authorization !== `Bearer ${process.env.REDIS_API_TOKEN}`){
        return new Response(JSON.stringify({
            error: 'No autorizado'
        }),{status:401})
    }

    const {searchParams} = new URL(request.url)
    const key = searchParams.get('key') ?? ''
    const value = await authService.getRedisValue(key)

    return NextResponse.json({value: value})
}