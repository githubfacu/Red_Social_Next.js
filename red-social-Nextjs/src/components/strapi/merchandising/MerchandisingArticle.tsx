import { MerchPageType } from "@/types/faq.types"

type MerchandisingArticleProps = {
    article: MerchPageType
    cover?: string
}

const MerchandisingArticle = ({article, cover}: MerchandisingArticleProps) => {

  const precioConDescuento = (precio: number, descuento: number): number => {
    const montoDescuento = descuento * precio / 100
    const precioFinal = precio - montoDescuento
    return parseFloat(precioFinal.toFixed(2))
  }

    
  return (
    <article className='flex mb-8 w-[800px]'>

        {
            cover !== undefined &&
            <img src={cover} alt={''} className=' w-[50%]'/>
        }

        <div className="flex flex-col ml-4">
          <h2>{article.attributes.title}</h2>


          <p>{article.attributes.description}</p>

          <div className="flex justify-end items-center mt-4">
            <div className="flex gap-2">

              {
                article.attributes.offer ? 
                <>
                  <div className="text-green-600">oferta</div>
                  <h2 className="text-green-600">$ {precioConDescuento(article.attributes.price, article.attributes.discountRate)}</h2>
                  <h2 className="line-through text-red-500 font-light">$ {article.attributes.price}</h2>
                </>
                :
                <h2>$ {article.attributes.price}</h2>
              }
            </div>

            <button className='button-primary ml-4'>Comprar</button>          
          </div>          
        </div>


    </article>
  )
}

export default MerchandisingArticle