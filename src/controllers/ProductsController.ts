import {Request, Response} from 'express'
import { getRepository, Like } from 'typeorm' // Repository Pattern - Regra de como ser criado/deletado
import * as Yup from 'yup'

import Product from '../models/Product'
import productView from '../views/products_view'


var _errors: string[] = []

export default {

    async showAllProducts(req: Request, res: Response) {
        const productsRepository = getRepository(Product)

        let {
            type
        } = req.query

        type === undefined || type === 'undefined' ? type = '' : type

        const products = await productsRepository.find({
            where: {type: Like(`%${String(type)}%`)}
        })

        return res.status(200).json(productView.renderMany(products))

    },

    async searchBarProducts (req: Request, res: Response) {
        const productsRepository = getRepository(Product)

        let {
            search
        } = req.query

        search === undefined || search === 'undefined' ? search = '' : search

        const products = await productsRepository.find({
            where: {description: Like(`%${String(search)}%`)}
        })

        return res.status(200).json(productView.renderMany(products))

    },

    async showProductById(req: Request, res: Response) {
        const { id } = req.params // nome id deve ser o mesmo nome do route param nomeado na routes.ts

        const productsRepository = getRepository(Product)

        const product = await productsRepository.findOneOrFail(id)

        return res.json(productView.render(product))

    }

    
    
}

  