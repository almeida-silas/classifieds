import React from 'react'

interface IProps {
  title: string
  date: Date
  description: string
}

const Card: React.FC<IProps> = ({ title, description, date }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <p className="card-text">{description}</p>
      </div>
    </div>
  )
}

export default Card
