import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import ButtonLink from '../components/button-link'
import ButtonAnchorLink from '../components/button-anchorlink'

const NoteTemplate = ({ data // this prop will be injected by the GraphQL query below
}) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { tags } = frontmatter
  const tagList = tags.map(
    (tag) => <li
    style={{
      margin: 0,
      padding: '0 4px 0 0',
      display: 'inline',
    }} key={tag}><ButtonLink text={tag} link={tag} /></li>
  )

  return (
    <Layout id="top">
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h6>{frontmatter.date}</h6>
          <ul
          style={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          }}>
          {tagList}
          </ul>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div
        style={{
          textAlign: 'center',
        }}>
        <ButtonAnchorLink text='top' link='#top' />
        </div>
        </div>
    </Layout>
  )
}

export default NoteTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "D MMMM YYYY")
        path
        title
        tags
      }
    }
  }
`
