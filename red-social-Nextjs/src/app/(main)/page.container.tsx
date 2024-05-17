'use client'
import MessagePostForm from "@/components/messages/MessagePostForm"
import MessageFeed from "@/components/messages/MessagesFeed"
import SearchBar from "@/components/search/SearchBar"
import { MessageProvider } from "@/contexts/MessageContent";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/paginacion.types";
import { UserType } from "@/types/user.types";

type IndexPageContainerProps = {
    messagesResponse: PageType<MessageType>;
    initialQuery?: string
    currentUser?: UserType
}

const IndexPageContainer = ({messagesResponse, initialQuery, currentUser}: IndexPageContainerProps) => {


  return (
    <MessageProvider initialPage={messagesResponse}>
        <SearchBar initialQuery={initialQuery}/>
        <MessagePostForm currentUser={currentUser}/>
        <MessageFeed/>
    </MessageProvider>
  )
}

export default IndexPageContainer