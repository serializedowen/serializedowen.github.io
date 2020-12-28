import React from 'react'
import './Snowbackground.scss'

export default function SnowBackground() {
  return (
    <>
      {new Array(200).fill(0).map(() => (
        <div className="snow"></div>
      ))}
    </>
  )
}
