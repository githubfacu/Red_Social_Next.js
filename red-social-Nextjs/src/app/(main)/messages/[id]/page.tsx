import messagesApi from "@/services/messages/messages.service"
import MessagePageContainer from "./page.container"

const MessagePage = async ({params} : {params: {id: string}}) => {

  const repliesPromise = messagesApi.getMessagesReplies(params.id, 0, 10)
  const messagePromise = messagesApi.getMessage(params.id)

  const [repliesPage, message] = await Promise.all([repliesPromise, messagePromise])

  return (
    <main className="flex flex-col bg-gray-100 p-8">

      <MessagePageContainer repliesPage={repliesPage} message={message} parentId={params.id}/>
    </main>
  )
}

export default MessagePage