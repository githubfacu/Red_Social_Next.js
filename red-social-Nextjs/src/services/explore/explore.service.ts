import { TrendingUserType } from "@/types/user.types"
import { PageType } from "@/types/paginacion.types"
import { TrendingHashtag } from "@/types/hash.types"
import httpInternalApi from "../common/http.internal.service"


class ExploreAPI {

    getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtag>> =>
        httpInternalApi.httpGetPublic(`/explore/trending`, new URLSearchParams({page: `${page}`, size: `${size}`}))
    getFollowRecommendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> =>
        httpInternalApi.httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}


const exploreApi = new ExploreAPI()

export default exploreApi