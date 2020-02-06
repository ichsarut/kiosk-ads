import React from "react"
import GridMenuButton from "./components/GridMenuButton"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered center-all">
        <div className="column is-narrow">
          <Link to="/about" className="navbar-item">
            <GridMenuButton title="About" />
          </Link>
        </div>
        <div className="column is-narrow">
          <Link to="/posts" className="navbar-item">
            <GridMenuButton title="Post" />
          </Link>
        </div>
        <div className="column is-narrow">
          <Link to="/projects" className="navbar-item">
            <GridMenuButton title="Project" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
