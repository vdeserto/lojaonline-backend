import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload' 
import CarrinhoController from './controllers/CarrinhoController'
import ProductsController from './controllers/ProductsController'
import UsersController from './controllers/UsersController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/produtos', ProductsController.showAllProducts)
routes.get('/produtos/:id', ProductsController.showProduct)

routes.post('/cadastro', UsersController.createUser)
routes.get('/login', UsersController.showAllUsers)
routes.get('/teste/session', (req, res) => CarrinhoController.setCookie('username', 'deserto', 1))



export default routes;