import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

import Layout from '../components/layout'

const NotesIndex = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <Layout>
          <h4>Latest</h4>
          {Posts}
        </Layout>
}

export default NotesIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 280)
          frontmatter {
            date(formatString: "D MMMM YYYY")
            path
            title
          }
          timeToRead
        }
      }
    }
  }
`
