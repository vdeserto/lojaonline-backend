import {Request, Response} from 'express'
import { getRepository } from 'typeorm' // Repository Pattern - Regra de como ser criado/deletado
import * as Yup from 'yup'

import User from '../models/User'
import userView from '../views/users_view'

var _errors: string[] = []

export default{

    async createUser(req: Request, res: Response) {
        const {
            name,
            lastName, 
            login,
            password
        } = req.body

        const usersRepository = getRepository(User)

        const data = {
            name,
            lastName,
            login,
            password
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            lastName: Yup.string().required(),
            login: Yup.string().required(),
            password: Yup.string().required()
        })
        
        // Esvaziando array de erros
        _errors = []

        await schema.validate(data, {
            abortEarly: false
        })        

        if(this.validaAlfabetico(name) && this.validaAlfabetico(lastName)){
            const user = usersRepository.create(data)

            await usersRepository.save(user)

            return res.status(201).json(userView.render(user))
        }
    
            return res.status(400).json(_errors)

    },
    
    async showAllUsers(req: Request, res: Response) {
        const usersRepository = getRepository(User)

        const users = await usersRepository.find()

        return res.json(userView.renderMany(users))
    },

    validaAlfabetico(param: string){
        let regexAlfabetico = /([a-zA-Z]+)/g

        return regexAlfabetico.test(param) ? 
        regexAlfabetico.test(param) :
        _errors.push(`O parâmetro ${param} não está em um formato alfabético.`)

    }
}