import MessagePostForm from "@/components/messages/MessagePostForm"
import MessageFeed from "@/components/messages/MessagesFeed"
import messagesApi from "@/services/messages/messages.service"

const IndexPage = async () => {

    const messagesResponse = await messagesApi.getMessagesFeed(0, 10)

    return (
      <main className="flex flex-col bg-gray-200 p-8">
        <section  className="flex flex-col mb-8">
          <MessagePostForm />
          <MessageFeed initialMessages={messagesResponse}/>
        </section>
      </main>
    )
  }
  
  export default IndexPage