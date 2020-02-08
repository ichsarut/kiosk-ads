import React from "react"
import { Link } from "react-router-dom"

export interface VideoData {
  title: string
  subtitle: string
  description?: string
  thumb?: string
  sources?: string[]
}

const AdsCard = ({ title, subtitle, description, thumb }: VideoData) => {
  const image = require(`../assets/images/${thumb}`)
  return (
    <Link to={`/${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="test" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title has-text-grey-dark	 is-4">{title}</p>
              <p className="subtitle has-text-grey-dark is-6">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AdsCard
