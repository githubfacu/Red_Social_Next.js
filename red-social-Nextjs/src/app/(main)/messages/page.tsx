import Message from "@/components/messages/Message"
import Link from "next/link"

const MessagesPage = () => {

    const messages = [
        {
          user: 'Rocky Raccoon',
          username: 'RockyRaccoon',
          message: `"Danny boy, this is a showdown"`,
          repliesCount: 13
        },
        {
          user: 'Doctor',
          username: 'Doc',
          message: `"Rocky, you met your match"`,
          repliesCount: 16
        }
      ]

    return (

        <main className="flex flex-col bg-gray-200 p-8">

            <section  className="flex flex-col mb-8">
                {messages.map((message, index)=> 
                    <Message key={`${index}`} message={message}/>)
                }
            </section>

        </main>
    )
  }
  
  export default MessagesPage