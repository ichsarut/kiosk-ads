import React from "react"
import videos from "../videos"
import AdsCard from "./AdsCard"

const HomePage = () => {
  return (
    <section className="hero is-info is-fullheight ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Showing Advertisements While Your Kiosk Is Idle
          </h1>

          <div className="tile is-ancestor">
            {videos.map((item, index) => (
              <div className="tile is-parent" key={index}>
                <AdsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
