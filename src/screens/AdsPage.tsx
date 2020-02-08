import React from "react"
import { VideoData } from "./AdsCard"
import { Link } from "react-router-dom"

const AdsPage = (props: VideoData) => {
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <Link to="/" className="button is-success is-inverted">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    <span>Home</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.description}</h2>
        </div>
      </div>
    </section>
  )
}

export default AdsPage
