import React from 'react'
import { Link } from 'gatsby'
import Menu from './menu'

const Header = ({ siteTitle, siteDescription }) => (
  <div
    style={{
      backgroundColor: 'rgb(36, 19, 5)',
      marginBottom: '1.45rem',
      borderBottom: '1px solid',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 640,
        padding: '1.0875rem',
        textAlign: 'center',
      }}
    >
    <Link
      to="/"
      style={{
        color: 'rgb(253, 246, 227)',
        textDecoration: 'none',
      }}
    >
      <h2
        style={{
          marginBottom: '1.0875rem',
      }}>

          {siteTitle}
      </h2>
      <p
        style={{
          margin: 0,
        }}>
        {siteDescription}
      </p>
      </Link>
    </div>
    <Menu />
  </div>
)

export default Header
