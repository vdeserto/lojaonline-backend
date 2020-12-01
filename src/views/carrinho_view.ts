import Carrinho from '../models/Carrinho'

export default {
    render(carrinho: Carrinho) {
        return {
            product_id: carrinho.product_id,
            user_cookie: carrinho.user_cookie
        }
    },

    renderMany(carrinhos: Carrinho[]) {
        return carrinhos.map(carrinho => this.render(carrinho))
    }
}