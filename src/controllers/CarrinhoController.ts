import {Request, Response} from 'express'
import { getRepository } from 'typeorm' // Repository Pattern - Regra de como ser criado/deletado

import Carrinho from '../models/Carrinho'
import carrinho_view from '../views/carrinho_view'


export default {
    async storeProductByCookie (req: Request, res: Response){
        const { 
            id,
            cookie
        } = req.params 
        
        try{
            this.verificaProdutoByCookie(id.toString(), cookie.toString())
            const carrinhosRepository = getRepository(Carrinho)
            const data = {
                product_id: Number(id), 
                user_cookie: cookie != undefined ? cookie : 'user'
            } 
            const session = carrinhosRepository.create(data)

            await carrinhosRepository.save(session)

            return true
        }
        
        catch{
            console.error('Não encontrado')
            return false
        }

    },
    async verificaProdutoByCookie(id: String, cookie:String){
        const carrinhosRepository = getRepository(Carrinho)
        
        const produtoByCookie = await carrinhosRepository.findOneOrFail({
            where: {product_id: (`${String(id)}`), user_cookie:(`${String(cookie)}`)}
        })

        return produtoByCookie != undefined ? true : false
    }
}