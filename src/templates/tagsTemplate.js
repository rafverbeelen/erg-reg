import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from '../components/layout'

const Tags = ({ pageContext, data }) => {
  const { edges } = data.allMarkdownRemark
  const { tag } = pageContext
  const tagCapitalized = tag.charAt(0).toUpperCase() + tag.slice(1)
	const tagHeader = `${tagCapitalized}`
  const Posts = edges
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
    <div>
      <h4>{tagHeader}</h4>
      {Posts}
    </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
  			  id
          excerpt(pruneLength: 280)
          frontmatter {
  			  date(formatString: "D MMMM YYYY")
          title
          path
        }
			  timeToRead
        }
      }
    }
  }
`
