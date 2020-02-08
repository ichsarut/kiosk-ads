import React, { useRef, useState } from "react"
import { Route, Switch } from "react-router-dom"
import IdleTimer from "react-idle-timer"
import { HomePage, NotFoundPage, AdsPage } from "./screens"

import videos from "./videos"

import "./Bulma.scss"
import "./assets/fonts/supermarket.ttf"

const App = () => {
  const player: any = useRef(null)
  const [isIdle, setIsIdle] = useState(false)
  const [videoIndex, setVideoIndex] = useState()

  const onAction = (e: any) => {
    console.log("user did something", e)
  }
  const onActive = (e: any) => {
    setIsIdle(false)
    player.current.pause()
  }
  const onIdle = (e: any) => {
    setIsIdle(true)
    randomVideo()
  }

  const randomVideo = () => {
    console.log("randomVideo")
    const randomIndex = Math.floor(Math.random() * videos.length)
    if (randomIndex === videoIndex) {
      randomVideo()
    } else {
      setVideoIndex(randomIndex)
    }
  }

  return (
    <>
      <IdleTimer
        element={document}
        onActive={onActive}
        onIdle={onIdle}
        onAction={onAction}
        debounce={250}
        timeout={1000 * 2}
      />
      {isIdle ? (
        <video
          id="player"
          className="video"
          ref={player}
          onLoadedData={() => {
            player.current.play()
          }}
          onEnded={e => {
            console.log("onEnded")
            randomVideo()
            player.current.load()
          }}
        >
          <source src={videos[videoIndex].sources[0]} type="video/mp4" />
        </video>
      ) : (
        <Switch>
          <Route exact path="/" component={HomePage} />
          {videos.map((item, index) => (
            <Route
              key={index}
              path={`/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              render={props => <AdsPage {...props} {...item} />}
            />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      )}
    </>
  )
}

export default App
