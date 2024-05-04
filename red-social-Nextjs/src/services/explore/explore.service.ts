import { TrendingUserType } from "@/types/user.types"
import { httpGetPublic } from "../common/http.service"
import { PageType } from "@/types/paginacion.types"
import { MessageType } from "@/types/message.types"
import { TrendingHashtag } from "@/types/hash.types"


class ExploreAPI {

    getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingUserType>> =>
        httpGetPublic(`/explore/trending`, new URLSearchParams({page: `${page}`, size: `${size}`}))
    getFollowRecommendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> =>
        httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}


const exploreApi = new ExploreAPI()

export default exploreApi