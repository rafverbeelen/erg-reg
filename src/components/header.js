import React from 'react'
import { Link } from 'gatsby'

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
      <h1
        style={{
          marginBottom: '1.0875rem',
      }}>
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
      <p
        style={{
          margin: 0,
          color: 'white',
        }}>
        {siteDescription}
      </p>
    </div>
  </div>
)

export default Header
