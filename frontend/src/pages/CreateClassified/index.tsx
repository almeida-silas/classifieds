import React, { useState } from 'react'

import Header from '../../components/Header'
import api from '../../services/api'

import './styles.css'

const CreateClassified: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleCreate = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    try {
      if (title.trim() && description.trim()) {
        await api.post('/create', { title, description })

        alert('O classificado foi escrito!')

        location.href = '/'
      }
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <Header />

      <form className="container create-classifieds shadow-lg">
        <div className="form-group mb-3">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="title">Descrição</label>

          <textarea
            className="form-control"
            rows={8}
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning"
          onClick={handleCreate}
        >
          Confirmar
        </button>
      </form>
    </>
  )
}

export default CreateClassified
