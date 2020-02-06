import React from "react"
import { Link } from "react-router-dom"

const Post = () => (
  <div className="columns is-mobile is-multiline is-centered center-all">
    <div className="columns is-centered center-all">
      <div className="column is-narrow ">
        <Link to="/" className="navbar-item">
          <span className="icon has-text-info ">
            <i className="fas fa-arrow-circle-left fa-3x"></i>
          </span>
        </Link>
      </div>
      <div className="column is-narrow">
        <h1 className="title">Posts</h1>
      </div>
    </div>
  </div>
)

export default Post
