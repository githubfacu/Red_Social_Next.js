import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import FAQSection from '@/components/faq/FAQSection'
import faqsApi from '@/services/faqs/faqs.service'


export default async function FAQPage({params}: {params: {slug: string}}) {
  const faqPages = await faqsApi.getFAQPages()
  const faqPage = faqPages.data.find(page => page.attributes.slug === `/${params.slug}`)
  
  
  return (
    <>
        <main>
            <FAQSection sections={faqPages.data} />

            <section className='flex flex-col'>
                <h2>{faqPage?.attributes.title}</h2>
                
            </section>
        </main>

    </>

  )
}