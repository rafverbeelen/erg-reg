import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ siteAuthor }) => (
  <div
    style={{
      background: 'black',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 640,
        padding: '1.45rem 1.0875rem 0',
        textAlign: 'center',
      }}
    >
      <p style={{color: 'white'}}>
        {siteAuthor}
      </p>
      <p>
        <a
          style={{
            color: 'white',
            textDecoration: 'none',
          }} href="https://twitter.com/rafverbeelen">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
      </p>
    </div>
  </div>
)

export default Footer
