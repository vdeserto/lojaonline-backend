import {Request, Response} from 'express'
import { getRepository } from 'typeorm' // Repository Pattern - Regra de como ser criado/deletado

import Carrinho from '../models/Carrinho'
import carrinho_view from '../views/carrinho_view'

export default {
    async storeProductBySession (req: Request, res: Response){
        const { id } = req.params

        const carrinhosRepository = getRepository(Carrinho)
        
        const carrinho = await carrinhosRepository.find({
            where: {product_id: id, user_cookie: this.getCookie('username')}
        })

        return res.status(200).json(carrinho_view.renderMany(carrinho))
    },
    getCookie(cookieKey: string) {
        let key = cookieKey + "="
        let cookieArray = decodeURIComponent(document.cookie).split(';')

        cookieArray.forEach(cookieParsed => {
            while (cookieParsed.charAt(0) == ' ') cookieParsed = cookieParsed.substring(1)
            if (cookieParsed.indexOf(key) == 0) return cookieParsed.substring(key.length, cookieParsed.length)
        });
        return ''
    },

    setCookie(cookieKey: string, cookieValue: string, exDays: Number){
        let date = new Date()
        date.setTime(date.getTime() + (Number(exDays)*24*60*60*1000))
        let expires = 'expires=' + date.toString()
        document.cookie = cookieKey + "=" + cookieValue + ";" + expires + ";path=/"

      alert(cookieKey + ','+ cookieValue + ','+expires +','+ exDays)
    }
}