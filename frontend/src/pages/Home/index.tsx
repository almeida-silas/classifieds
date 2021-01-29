import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <span>Classificados</span>

        <button type="button" className="btn btn-secondary">
          <FiPlusCircle size={22} /> <span>Novo classificado</span>
        </button>
      </div>

      <div></div>

      <div className="alert alert-dark position-absolute bottom-0 start-50 translate-middle-x">
        <div className="badge bg-secondary">
          <span>4</span>
        </div>{' '}
        classificado(s)
      </div>
    </div>
  )
}

export default Home
