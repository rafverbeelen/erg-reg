import React from "react"
import { Link } from "gatsby"
import ButtonLink from '../components/button-link'

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
    <div>
    <ButtonLink text='read' link={post.frontmatter.path} />
    </div>
  </div>
)

export default PostLink
