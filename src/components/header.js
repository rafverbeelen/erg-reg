import React from 'react'
import { Link } from 'gatsby'
import Menu from './menu'

const Header = ({ siteTitle, siteDescription }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={{color: 'white'}}>
        {siteDescription}
      </p>
      <Menu />
    </div>
  </div>
)

export default Header
