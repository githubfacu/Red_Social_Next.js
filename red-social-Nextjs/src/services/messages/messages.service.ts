import { httpGetPublic, httpPost } from "../common/http.service"
import { PageType } from "@/types/paginacion.types"
import { MessageType } from "@/types/message.types"


class MessageAPI {

    getMessagesFeed = async (page: number, size: number): Promise<PageType<MessageType>> =>
        httpGetPublic(`/messages/feed`,  new URLSearchParams({page: `${page}`, size: `${size}`}))
    postMessages = async (message: string): Promise<MessageType> =>
        httpPost(`/messages`, {message: message})
}

const messagesApi = new MessageAPI()

export default messagesApi