import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <h3>
      <Link to={post.frontmatter.path}
      style={{
        color: 'black',
        textDecoration: 'none',
      }}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <h6>{post.frontmatter.date} | {post.timeToRead} min read</h6>
    <p>{post.excerpt}</p>
  </div>
)

export default PostLink
