'use client'
import Message from "@/components/messages/Message"
import MessageList from "@/components/messages/MessageList";
import MessagePostForm from "@/components/messages/MessagePostForm"
import useMessages, { MessageProvider } from "@/contexts/MessageContent";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/paginacion.types";
import { UserType } from "@/types/user.types";

type MessagePageContainerProps = {
    repliesPage: PageType<MessageType>;
    message: MessageType;
    parentId?: string;
    currentUser?: UserType
}

const MessageContainer = () => {
    const {message} = useMessages()
    if(!message){
        return <></>
    }
    return <section className="flex flex-col mb-8">
            <Message message={message}/>
        </section>
}



const MessagePageContainer = ({repliesPage, message, parentId, currentUser}: MessagePageContainerProps) => {


  return (
    <MessageProvider initialPage={repliesPage}
        initialMessage={message}>

        <MessageContainer />

        <section>
            <MessagePostForm parentId={parentId} currentUser={currentUser}/>
        </section>

        <section className="flex flex-col mb-8">
            <MessageList />
        </section>
    </MessageProvider>
  )
}

export default MessagePageContainer