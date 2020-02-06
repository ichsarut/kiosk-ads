import React from "react"

interface GridMenuButtonProp {
  title: string
  color?: string
}

const GridMenuButton = ({ title, color = "#00d1b2" }: GridMenuButtonProp) => {
  return (
    <div className="grid-button button" style={{ backgroundColor: color }}>
      <p className="bd-notification is-primary">{title}</p>
    </div>
  )
}

export default GridMenuButton
