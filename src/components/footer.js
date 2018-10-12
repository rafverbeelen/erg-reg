import React from 'react'

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
        padding: '1.45rem 1.0875rem',
        textAlign: 'center',
      }}
    >
      <p style={{color: 'white'}}>
        {siteAuthor}
      </p>
    </div>
  </div>
)

export default Footer
