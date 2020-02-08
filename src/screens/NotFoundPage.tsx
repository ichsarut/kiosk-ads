import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => (
  <div className="columns is-centered center-all">
    <div className="column is-narrow ">
      <span className="icon has-text-warning ">
        <i className="fas fa-exclamation-triangle fa-3x"></i>
      </span>
    </div>
    <div className="column is-narrow ">
      <h1 className="title">NotFoundPage</h1>
    </div>
    <div className="column is-narrow ">
      <Link to="/">
        <span className="icon has-text-info ">
          <i className="fas fa-home fa-3x"></i>
        </span>
      </Link>
    </div>
  </div>
)

export default NotFoundPage
