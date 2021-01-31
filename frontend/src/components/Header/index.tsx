import React from 'react'

import { Link } from 'react-router-dom'
import { FiEdit, FiFileText } from 'react-icons/fi'

import './styles.css'

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-light shadow-lg rounded">
      <p className="title">Classificados</p>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

      <div className="d-flex">
        <Link to="/" className="btn btn-outline-secondary" type="button">
          <FiFileText size={22} /> <span>Classificados</span>
        </Link>

        <Link
          to="/create"
          className="btn btn-outline-secondary me-4"
          type="button"
        >
          <FiEdit size={22} /> <span>Novo classificado</span>
        </Link>
      </div>
    </nav>
  )
}

export default Header
