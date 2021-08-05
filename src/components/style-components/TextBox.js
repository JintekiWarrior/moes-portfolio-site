import React from 'react'
import './TextBox.scss'

const TextBox = (props) => {
  return (
    <div id="text-box" style={props.style}>
      {props.children}
    </div>
  )
}

export default TextBox
