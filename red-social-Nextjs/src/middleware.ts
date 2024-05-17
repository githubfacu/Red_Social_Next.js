import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AccesoDenegado } from './services/common/http.errors'
import authApi from './services/auth/auth.api'

export async function middleware(request: NextRequest) {
  
  try{
    const sessionId = request.cookies.get('SocialSessionID')?.value ?? ''
    if (!sessionId) {
        throw new AccesoDenegado('Acceso denegado, no hay Id de sesión')
    }

    const accessToken = await getAccessToken(sessionId)
    if (!accessToken) {
        throw new AccesoDenegado('Acceso denegado')
    }
    
    return getHeadersAuthentication(request, accessToken);
  } 
  catch (e){
    if (e instanceof AccesoDenegado) {
      if (!request.url.endsWith('/profile')) {
        return NextResponse.next()
      }
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

const getAccessToken = async (sessionId: string): Promise<string> => {
  return (await authApi.getRedisValue(sessionId)).value
}

const getHeadersAuthentication = (request: NextRequest, accessToken: string) => {

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-social-access-token', accessToken)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  return response
}


export const config = {
  matcher: ['/','/messages/:path*','/profile','/api/proxy/:path*']
}