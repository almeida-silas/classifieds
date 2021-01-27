import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import ClassifiedDB from '../Models/Classified'
import OrphanateSchema from '../Validators/ClassifieSchema'

export default new class Classified {
  async show (request: Request, response: Response) {
    const classifiedRepository = getRepository(ClassifiedDB)

    const classifieds = await classifiedRepository.find()

    return response.json(classifieds)
  }

  async store (request: Request, response: Response) {
    const { title, description } = request.body
    const data = { title, description }

    await OrphanateSchema.validate(data, { abortEarly: false })

    const classifiedRepository = getRepository(ClassifiedDB)

    const classified = classifiedRepository.create(data)
    await classifiedRepository.save(classified)

    return response.json(classified)
  }
}
