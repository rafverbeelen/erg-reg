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
      <div>
        <ul style={{
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        }}>
        {data.allMarkdownRemark.group.map(tag => (
          <li key={tag.fieldValue}
          style={{
            display: 'inline',
          }}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}
            style={{
              padding: '8px',
              color: 'white',
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