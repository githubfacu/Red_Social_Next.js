import { PageType } from "@/types/paginacion.types"
import { MessageType } from "@/types/message.types"
import httpInternalApi from "../common/http.internal.service"


class MessageAPI {

    getMessagesFeed = async (page: number, size: number): Promise<PageType<MessageType>> =>
        httpInternalApi.httpGetPublic(`/messages/feed`,  new URLSearchParams({page: `${page}`, size: `${size}`}))
    getMessage = async (id: string): Promise<MessageType> => httpInternalApi.httpGetPublic(`/messages/${id}`)
    getMessagesReplies = async (id: string, page: number, size: number): Promise<PageType<MessageType>> =>
        httpInternalApi.httpGetPublic(`/messages/${id}/replies`,  new URLSearchParams({page: `${page}`, size: `${size}`}))
    postMessages = async (message: string, parentId?: string): Promise<MessageType> =>
        httpInternalApi.httpPost(`/messages`, {message: message, parentId: parentId ?? null})
    getMessagesByHash = async (hashtag: string ,page: number, size: number): Promise<PageType<MessageType>> =>
        httpInternalApi.httpGetPublic(`/messages/hash/${hashtag}`,  new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const messagesApi = new MessageAPI()

export default messagesApi