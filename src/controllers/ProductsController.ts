import {Request, Response} from 'express'
import { getRepository } from 'typeorm' // Repository Pattern - Regra de como ser criado/deletado
import * as Yup from 'yup'

import Product from '../models/Product'
import productView from '../views/products_view'


var _errors: string[] = []

export default {

    async showAllProducts(req: Request, res: Response) {
        const productsRepository = getRepository(Product)

        const products = await productsRepository.find()

        return res.json(productView.renderMany(products))

    },

    async showProduct(req: Request, res: Response) {
        const { id } = req.params // nome id deve ser o mesmo nome do route param nomeado na routes.ts

        const productsRepository = getRepository(Product)

        const product = await productsRepository.findOneOrFail(id)

        return res.json(productView.render(product))

    }
    
}

  