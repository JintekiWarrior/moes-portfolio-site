import React, { Fragment } from 'react'
import Links from './../../style-components/Links/Links'

import { footerContent } from './FooterContent'

const Footer = (props) => {
  return (
    <Fragment>
      {footerContent.map(content => (
        <div key={content.id}>
          <Links
            link={content.link}
            linkText={content.name}
            text={content.text}
          />
        </div>
      ))}
    </Fragment>
  )
}

export default Footer
