import MerchandisingSection from '@/components/strapi/merchandising/MerchandisingSection'
import faqsApi from '@/services/strapi/strapi.service'

export default async function MerchandisingPage() {

  const merchandisingPages = await faqsApi.getMerchandisingPages()
  
  
  return (
    <>
        <main>
            <MerchandisingSection sections={merchandisingPages.data}/>    
        </main>

    </>

  )
}
