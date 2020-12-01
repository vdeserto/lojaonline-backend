import Product from '../models/Product'

export default {
    render(product: Product) {
        return {
            id: product.id,
            name: product.name,
            brand: product.brand,
            type: product.type,
            description: product.description,
            price: product.price,
            image: product.image,
        }
    },

    renderMany(products: Product[]) {
        return products.map(product => this.render(product))
    }
}