import React from "react"

const ButtonAnchorLink = ({ text, link }) => (
  <a
  style={{
    backgroundColor: 'rgb(253, 246, 227)',
    border: '1px solid rgb(36, 19, 5)',
    color: 'rgb(36, 19, 5)',
    padding: '0px 8px',
    marginTop: '1.0875rem',
    marginBottom: '1.45rem',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '4px',
  }} href={link}>
  {text}
  </a>
)

export default ButtonAnchorLink
