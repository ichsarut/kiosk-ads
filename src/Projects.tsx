import React from "react"
import { Link } from "react-router-dom"

const Project = () => (
  <div className="columns is-centered center-all">
    <div className="column is-narrow ">
      <Link to="/" className="navbar-item">
        <span className="icon has-text-info ">
          <i className="fas fa-arrow-circle-left fa-3x"></i>
        </span>
      </Link>
    </div>
    <div className="column is-narrow">
      <h1 className="title">Project</h1>
    </div>
  </div>
)
export default Project
