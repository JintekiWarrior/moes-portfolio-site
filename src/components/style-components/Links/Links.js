import React from 'react'
import './Links.scss'

// Component will display a link with some text.
const Links = (props) => {
  return (
    <div>
      <a href={props.link}>{props.linkText}</a>
      <p>{props.text}</p>
    </div>
  )
}

export default Links
