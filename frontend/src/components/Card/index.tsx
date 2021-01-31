import React from 'react'

import './styles.css'

interface IProps {
  title: string
  date: Date
  description: string
}

const Card: React.FC<IProps> = ({ title, description, date }: IProps) => {
  return (
    <div className="card shadow-lg rounded" style={{ width: '25rem' }}>
      <div className="card-body">
        <h4 className="classified card-title">{title.toUpperCase()}</h4>
        <h6 className="classified card-subtitle mb-2 text-muted">
          {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getUTCDate()}/${
            date.getUTCMonth() + 1
          }/${date.getUTCFullYear()}`}
        </h6>

        <p className="classified card-text">{description}</p>
      </div>
    </div>
  )
}

export default Card
