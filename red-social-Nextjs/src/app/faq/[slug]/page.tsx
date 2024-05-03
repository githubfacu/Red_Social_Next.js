import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import FAQCard from '@/components/faq/FAQCard'
import FAQSection from '@/components/faq/FAQSection'

export default function FAQPage() {

  return (
    <>
        <main>
            <FAQSection />

            <section className='flex flex-col'>
                <h2>Seccion 1</h2>
            </section>            
        </main>

    </>

  )
}
