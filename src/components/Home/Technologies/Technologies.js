import './Technologies.scss'
import React from 'react'
import TextBox from './../../style-components/TextBox'
import { technologyContent } from './technologyContent'


const Technologies = () => {

  return (
    <TextBox>
      <div id="technologies-lists-container">
        <h2 id="tech-heading">Technologies</h2>
        <hr />
        {technologyContent.map(tech => (
          <p id="tech-text" key={tech}>{tech}</p>
        ))}
      </div>
    </TextBox>
  )
}

export default Technologies
