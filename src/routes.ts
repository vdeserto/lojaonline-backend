import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload' 
import CarrinhoController from './controllers/CarrinhoController'
import ProductsController from './controllers/ProductsController'
import UsersController from './controllers/UsersController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/produtos', ProductsController.showAllProducts)
routes.get('/pesquisa', ProductsController.searchBarProducts)
routes.get('/produtos/:id', ProductsController.showProductById)

routes.post('/cadastro', UsersController.createUser)
routes.post('/login', UsersController.validaLogin)
routes.post('/carrinho/:id/:cookie', (req, res) => CarrinhoController.storeProductByCookie(req, res))
// routes.get('/teste/session', async (req, res) => ( CarrinhoController('username')))



export default routes;