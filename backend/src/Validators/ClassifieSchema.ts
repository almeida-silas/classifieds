import * as Yup from 'yup'

const OrphanateSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
})

export default OrphanateSchema
