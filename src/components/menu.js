import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, StaticQuery, graphql } from "gatsby"

const Menu = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 2000
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div style={{
        backgroundColor: 'rgb(253, 246, 227)',
        textAlign: 'center',
      }}>
        <ul style={{
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        }}>
        <li
        style={{
          margin: 0,
          padding: 0,
          display: 'inline',
        }}>
          <Link to={`/notes/`}
          style={{
            paddingRight: '4px',
            color: 'rgb(36, 19, 5)',
            textDecoration: 'none',
          }}>
            latest
          </Link>
        </li>
        {data.allMarkdownRemark.group.map(tag => (
          <li key={tag.fieldValue}
          style={{
            margin: 0,
            padding: 0,
            display: 'inline',
          }}>
            <Link to={`${kebabCase(tag.fieldValue)}/`}
            style={{
              paddingLeft: '4px',
              paddingRight: '4px',
              color: 'rgb(36, 19, 5)',
              textDecoration: 'none',
            }}>
              {tag.fieldValue}
            </Link>
          </li>
        ))}
        </ul>
      </div>
    )}
  />
)

Menu.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default Menu
