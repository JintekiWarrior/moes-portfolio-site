import './footer.scss'
import React, { Fragment } from 'react'
import Links from './../../style-components/Links/Links'

import { footerContent } from './FooterContent'

const Footer = (props) => {
  return (
    <Fragment>
      <div id="link-component-container">
        {footerContent.map(content => (
          <Links
            key={content.id}
            link={content.link}
            linkText={content.name}
            text={content.text}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default Footer
