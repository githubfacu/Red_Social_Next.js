import FAQSection from '@/components/strapi/faq/FAQSection'
import faqsApi from '@/services/strapi/strapi.service'


export default async function FAQPage() {
  const faqPages = await faqsApi.getFAQPages()
  
  
  return (
    <>
        <main>
            <FAQSection sections={faqPages.data}/>    
        </main>

    </>

  )
}
