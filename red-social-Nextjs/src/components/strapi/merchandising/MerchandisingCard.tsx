import { getCoverImg } from "@/services/common/strapi.service"
import { MerchPageType } from "@/types/faq.types"
import Link from "next/link"

type MerchandisingCardProps = {
  product: MerchPageType,
}

const MerchandisingCard = ({ product}: MerchandisingCardProps) => {

  const cover = getCoverImg(product.attributes.images.data?.attributes.url)

  return (
    <Link href={`/merchandising${product.attributes.slug}`} className='col-span-3'>
        <div className='cursor-pointer rounded-lg border-gray-200 p-4'>
            <h3>{product.attributes.title}</h3>
            {
              cover !== undefined &&
              <img src={cover} alt={''} className=' w-36'/>
            }
        </div>
    </Link>
  )
}

export default MerchandisingCard