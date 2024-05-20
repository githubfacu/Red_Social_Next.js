import { FAQPageType, MerchPageType } from "@/types/faq.types"
import { StrapiResultType } from "@/types/strapi.types"
import { strapiGet } from "../common/strapi.service"


class FAQsAPI {

    getFAQPages = async (): Promise<StrapiResultType<FAQPageType>> => 
        strapiGet('/faq-pages')
    getMerchandisingPages = async (): Promise<StrapiResultType<MerchPageType>> => 
        strapiGet('/merchandisings?populate%5Bimages%5D%5Bfields%5D%5B0%5D=url')
}

const faqsApi = new FAQsAPI()

export default faqsApi