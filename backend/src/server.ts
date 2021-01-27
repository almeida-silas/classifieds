import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import './Database/connection'

import routes from './routes';
import errorHandler from './Errors/handle'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(errorHandler)

app.listen(3333)
