import MerchandisingArticle from '@/components/strapi/merchandising/MerchandisingArticle';
import MerchandisingSection from '@/components/strapi/merchandising/MerchandisingSection'
import { getCoverImg } from '@/services/common/strapi.service';
import faqsApi from '@/services/strapi/strapi.service'


export default async function FAQPage({params}: {params: {slug: string}}) {
  const merchPages = await faqsApi.getMerchandisingPages()
  const merchPage = merchPages.data.find(page => page.attributes.slug === `/${params.slug}`)
  
  const cover = getCoverImg(merchPage?.attributes.images.data?.attributes.url)
  

  return (
    <>
        <main className='flex flex-col items-center'>
            <MerchandisingSection sections={merchPages.data}/>

            <MerchandisingArticle article={merchPage} cover={cover}/>
        </main>

    </>

  )
}