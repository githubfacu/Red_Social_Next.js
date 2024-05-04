export type FAQPageType = {
    id: number
    attributes: {
        title: string
        body: {
            children: {
                text: string
            }
        }
        slug: string        
    }
}