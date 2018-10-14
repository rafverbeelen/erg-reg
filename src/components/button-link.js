import React from "react"
import { Link } from "gatsby"

const ButtonLink = ({ text, link }) => (
  <Link
  style={{
    backgroundColor: 'rgb(253, 246, 227)',
    border: '1px solid rgb(36, 19, 5)',
    color: 'rgb(36, 19, 5)',
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
