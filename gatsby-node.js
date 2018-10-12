const path = require("path")
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const noteTemplate = path.resolve(`src/templates/noteTemplate.js`)
  const tagsTemplate = path.resolve("src/templates/tagsTemplate.js")

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    // Create note detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: noteTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    // Tag pages:
   let tags = []
   // Iterate through each post, putting all found tags into `tags`
   _.each(posts, edge => {
     if (_.get(edge, "node.frontmatter.tags")) {
       tags = tags.concat(edge.node.frontmatter.tags)
     }
   })
   // Eliminate duplicate tags
   tags = _.uniq(tags)

   // Make tag pages
   tags.forEach(tag => {
     createPage({
       path: `/tags/${_.kebabCase(tag)}/`,
       component: tagsTemplate,
       context: {
         tag,
       },
     })
   })
 })
}
