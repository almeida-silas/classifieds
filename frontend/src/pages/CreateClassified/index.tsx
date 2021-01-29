import React from 'react'

const CreateClassified: React.FC = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Título
        </label>

        <input type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descrição
        </label>

        <textarea className="form-control" id="description" />
      </div>

      <button type="submit" className="btn btn-primary">
        Confirmar
      </button>
    </form>
  )
}

export default CreateClassified
