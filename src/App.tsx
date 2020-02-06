import React, { useRef, useState } from "react"
import { Route, Switch } from "react-router-dom"
import IdleTimer from "react-idle-timer"

import HomePage from "./HomePage"
import About from "./About"
import Posts from "./Posts"
import Projects from "./Projects"
import NotFoundPage from "./NotFoundPage"

import videos from "./videos"

import "./Bulma.scss"
import "./assets/fonts/supermarket.ttf"

const App = () => {
  const idleTimer: any = useRef(null)
  const player: any = useRef(null)
  const [isIdle, setIsIdle] = useState(false)
  const [videoIndex, setVideoIndex] = useState()

  const onAction = (e: any) => {
    console.log("user did something", e)
    console.log(idleTimer)
  }
  const onActive = (e: any) => {
    setIsIdle(false)
    player.current.pause()
    console.log("user is active", e)
    console.log("time remaining", idleTimer.current.getRemainingTime())
  }
  const onIdle = (e: any) => {
    setIsIdle(true)
    randomVideo()
    console.log("user is idle", e)
    console.log(idleTimer)
    console.log("last active", idleTimer.current.getLastActiveTime())
  }

  const randomVideo = () => {
    console.log("randomVideo")
    const randomIndex = Math.floor(Math.random() * videos.length)
    setVideoIndex(randomIndex)
  }

  return (
    <>
      <IdleTimer
        ref={ref => (idleTimer.current = ref)}
        element={document}
        onActive={onActive}
        onIdle={onIdle}
        onAction={onAction}
        debounce={250}
        timeout={1000 * 2}
      />
      {isIdle ? (
        <div>
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
        </div>
      ) : (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/projects" component={Projects} />
          <Route component={NotFoundPage} />
        </Switch>
      )}
    </>
  )
}

export default App
