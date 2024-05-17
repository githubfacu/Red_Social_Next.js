import messagesApi from "@/services/messages/messages.service"
import IndexPageContainer from "./page.container"
import { headers } from "next/headers"
import userApi from "@/services/users/users.service"


const IndexPage = async ({searchParams}: {searchParams? : {[key: string]: string | undefined}}) => {
  
    const accessToken = headers().get('x-social-access-token') ?? null
    const currentUser = accessToken? await userApi.getMeInternal(accessToken) : undefined

    const messagesResponse = searchParams?.query ?
      await messagesApi.getMessagesByHash(searchParams?.query, 0, 10) :
      await messagesApi.getMessagesFeed(0, 10)


    return (
      <main className="flex flex-col bg-gray-200 p-8">
        <section  className="flex flex-col mb-8">
          <IndexPageContainer messagesResponse={messagesResponse} initialQuery={searchParams?.query} currentUser={currentUser}/>
        </section>
      </main>
    )
  }
  
  export default IndexPage