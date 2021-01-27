import * as Yup from 'yup'

const ClassifiedSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
})

export default ClassifiedSchema
