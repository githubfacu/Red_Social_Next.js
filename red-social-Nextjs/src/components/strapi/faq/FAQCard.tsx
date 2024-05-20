import Link from 'next/link'

type FAQCardProps = {
    label: string
    href: string
    body: [{
      type: string
      children: [
          {
              type: string
              text: string
          }
      ]
  }]
}

const FAQCard = ({label, href, body} : FAQCardProps) => {
  
  return (
    <Link href={href} className='col-span-3'>
        <div className='cursor-pointer rounded-lg border-gray-200 p-4'>
            <h3>{label}</h3>
        </div>
    </Link>
  )
}

export default FAQCard