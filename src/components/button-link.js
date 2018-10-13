import React from "react"
import { Link } from "gatsby"

const ButtonLink = ({ text, link }) => (
  <Link
  style={{
    backgroundColor: '#e7e7e7',
    border: 'none',
    color: 'black',
    padding: '4px 8px',
    marginBottom: '1.0875rem',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '4px',
  }} to={link}>
  {text}
  </Link>
)

export default ButtonLink
