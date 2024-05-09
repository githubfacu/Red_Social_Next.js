import messagesApi from "@/services/messages/messages.service"
import { MessageType } from "@/types/message.types"
import { PageType } from "@/types/paginacion.types"
import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"


export type MessageState = {
    message?: MessageType
    messages: MessageType[]
    messagePage: PageType<MessageType>
    postMessages: (message: string, parentId?: string) => void
    fetchNextPage: () => void
    refresh: () => void
}

const MessageContext = createContext<MessageState | undefined>(undefined)

type MessageProviderProps = PropsWithChildren & {
    initialPage: PageType<MessageType>
    initialMessage?: MessageType
}

export const MessageProvider: FC<MessageProviderProps> = ({children, initialPage, initialMessage}: MessageProviderProps) => {

    const [messagePage, setMessagePage] = useState<PageType<MessageType>>(initialPage)
    const [message, setMessage] = useState<MessageType | undefined>(initialMessage)
    const [messages, setMessages] = useState<MessageType[]>(initialPage.content)

    useEffect(() => {
        setMessagePage(initialPage)
        setMessages(initialPage.content)
    }, [initialPage])

    const postMessages = useCallback(async (textMessage: string, parentId?: string) => {
        const response = await messagesApi.postMessages(textMessage, parentId)
        setMessages([response, ...messagePage.content])
        if (message && message.id === parentId) {
            setMessage({
                ...message,
                repliesCount: message.repliesCount+1
            })
        }
    }, [messagePage, message])
        
    const fetchNextPage = useCallback(async () => {

        const page = messagePage.pagination.page + 1
        const response = await messagesApi.getMessagesFeed(page, 10)

        setMessagePage(response)
        setMessages([...messages, ...response.content])
    }, [messagePage.pagination.page, messages])

    const refresh = useCallback(async () => {
        const response = await messagesApi.getMessagesFeed(0, 10)
        setMessagePage(response)
        setMessages(response.content)
    }, [])
    

    const value = useMemo(() => ({
        message,
        messages,
        messagePage,
        postMessages,
        fetchNextPage,
        refresh
    }), [message, messages, messagePage, postMessages, fetchNextPage, refresh])

    return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
}

const useMessages = (): MessageState => {
    const context = useContext(MessageContext)

    if(!context){
        throw new Error ('ver uso useMessages')
    }

    return context
}

export default useMessages