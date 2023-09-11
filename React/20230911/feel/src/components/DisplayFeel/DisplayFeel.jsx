import React from 'react'
import "./DisplayFeel.css"

export default function DisplayFeel(props) {
  return (
    <div>
      <h2 className='container'>{props.feel ? `기분이 : ${props.feel}`:'아직 선택하지 않았어요...'}</h2>
    </div>
  )
}
