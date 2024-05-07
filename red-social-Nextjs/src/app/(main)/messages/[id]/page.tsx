import Message from "@/components/messages/Message"
import MessagePostForm from "@/components/messages/MessagePostForm"
import messagesApi from "@/services/messages/messages.service"

const MessagePage = async ({params} : {params: {id: string}}) => {

  const repliesPromise = messagesApi.getMessagesReplies(params.id, 0, 10)
  const messagePromise = messagesApi.getMessage(params.id)

  const [replies, message] = await Promise.all([repliesPromise, messagePromise])

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <Message message={message}/>
      </section>

      <section>
        <MessagePostForm parentId={params.id}/>
      </section>

      <section className="flex flex-col mb-8">
        {
          replies.content.map((message, index)=> 
            <Message key={`${index}`} message={message}/>)
        }
      </section>
    </main>
  )
}

export default MessagePage