import { httpGetPublic, httpPost } from "../common/http.service"
import { PageType } from "@/types/paginacion.types"
import { MessageType } from "@/types/message.types"


class MessageAPI {

    getMessagesFeed = async (page: number, size: number): Promise<PageType<MessageType>> =>
        httpGetPublic(`/messages/feed`,  new URLSearchParams({page: `${page}`, size: `${size}`}))
    getMessage = async (id: string): Promise<MessageType> => httpGetPublic(`/messages/${id}`)
    getMessagesReplies = async (id: string, page: number, size: number): Promise<PageType<MessageType>> =>
        httpGetPublic(`/messages/${id}/replies`,  new URLSearchParams({page: `${page}`, size: `${size}`}))
    postMessages = async (message: string, parentId?: string): Promise<MessageType> =>
        httpPost(`/messages`, {message: message, parentId: parentId ?? null})
    getMessagesByHash = async (hashtag: string ,page: number, size: number): Promise<PageType<MessageType>> =>
        httpGetPublic(`/messages/hash/${hashtag}`,  new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const messagesApi = new MessageAPI()

export default messagesApi