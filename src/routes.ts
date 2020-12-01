import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload' 
import ProductsController from './controllers/ProductsController'
import UsersController from './controllers/UsersController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/produtos', ProductsController.showAllProducts)
routes.get('/produtos/:id', ProductsController.showProduct)

routes.post('/login', UsersController.createUser)
routes.get('/login', UsersController.showAllUsers)
// routes.post('/teste/session', UsersController.setCookie)



export default routes;