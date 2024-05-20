import FAQSection from '@/components/strapi/faq/FAQSection'
import faqsApi from '@/services/strapi/strapi.service'


export default async function FAQPage({params}: {params: {slug: string}}) {
  const faqPages = await faqsApi.getFAQPages()
  const faqPage = faqPages.data.find(page => page.attributes.slug === `/${params.slug}`)
  
  
  return (
    <>
        <main>
            <FAQSection sections={faqPages.data} />

            <section className='flex flex-col'>
                <h2>{faqPage?.attributes.title}</h2>
                <p>{faqPage?.attributes.body[0].children[0].text}</p>
            </section>
        </main>

    </>

  )
}