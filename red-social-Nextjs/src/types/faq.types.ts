export type FAQPageType = {
    id: number
    attributes: {
        title: string
        body: [{
            type: string
            children: [
                {
                    type: string
                    text: string
                }
            ]
        }]
        slug: string        
    }
}

export type MerchPageType = {
    id: number,
    attributes: {
        title: string,
        description: string,
        price: number,
        isStock: boolean,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        slug: string,
        stock: number,
        offer: boolean,
        discountRate: number,
        images: {
            data: {
                id: number
                attributes: {
                    url: string
                }
            }
        }
    }
}