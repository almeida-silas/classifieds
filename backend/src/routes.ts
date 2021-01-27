import { Router } from 'express'

import ClassifiedController from './Controllers/ClassifiedController';

const routes = Router()

routes.get('/', ClassifiedController.show)
routes.post('/create', ClassifiedController.store)

export default routes
