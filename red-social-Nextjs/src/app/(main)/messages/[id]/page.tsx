import messagesApi from "@/services/messages/messages.service"
import MessagePageContainer from "./page.container"
import { headers } from "next/headers"
import userApi from "@/services/users/users.service"

const MessagePage = async ({params} : {params: {id: string}}) => {

  const accessToken = headers().get('x-social-access-token') ?? null
  const currentUser = accessToken? await userApi.getMeInternal(accessToken) : undefined

  const repliesPromise = messagesApi.getMessagesReplies(params.id, 0, 10)
  const messagePromise = messagesApi.getMessage(params.id)

  const [repliesPage, message] = await Promise.all([repliesPromise, messagePromise])

  return (
    <main className="flex flex-col bg-gray-100 p-8">

      <MessagePageContainer repliesPage={repliesPage} message={message} parentId={params.id} currentUser={currentUser}/>
    </main>
  )
}

export default MessagePage