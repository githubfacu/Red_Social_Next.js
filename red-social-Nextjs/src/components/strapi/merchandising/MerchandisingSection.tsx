import { MerchPageType } from '@/types/faq.types'
import MerchandisingCard from './MerchandisingCard'

type MerchandisingSectionProps = {
  sections: MerchPageType[]
}

const MerchandisingSection = ({sections} : MerchandisingSectionProps) => {

  return (
    <section className='flex flex-col'>
        <h1 className='mb-4'>Merchandising</h1>

        <div className='grid grid-cols-12 gap-4 mb-8'>

          {sections.map(section => 
            <MerchandisingCard key={section.attributes.slug} product={section}/>
          )}

        </div>
    </section>
  )
}

export default MerchandisingSection