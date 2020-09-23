const path = require('path')
const _ = require('lodash')
const { writeFile } = require('fs')

const searchData = []

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === 'MarkdownRemark') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'nested')
    ) {
      slug = `/docs/${path.relative(
        path.join(__dirname, '/blog'),
        path.parse(node.fileAbsolutePath).dir
      )}/${_.kebabCase(node.frontmatter.slug || node.frontmatter.title)}`
    } else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    } else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }

    createNodeField({ node, name: 'slug', value: slug })

    searchData.push({ ...node.frontmatter, content: node.internal.content })
  }
}

exports.onPostBuild = async (_, pluginOptions) => {
  const savePath = path.join('./public', 'search-data.json')
  return new Promise((resolve, reject) => {
    writeFile(savePath, JSON.stringify(searchData), resolve)
  })
}

exports.onCreatePage = ({ page, actions }) => {}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/post.js')
    const categoryPage = path.resolve('src/templates/category.js')
    const docsPage = path.resolve('src/templates/docs.js')
    const docPage = path.resolve('src/templates/doc.js')
    resolve(
      graphql(`
        {
          posts: allMarkdownRemark {
            edges {
              node {
                fileAbsolutePath
                fields {
                  slug
                }
                frontmatter {
                  title
                  category
                  nested
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.posts.edges

        posts.forEach((edge, index) => {
          const next = index === 0 ? null : posts[index - 1].node
          const prev = index === posts.length - 1 ? null : posts[index + 1].node

          if (edge.node.frontmatter.nested) {
            createPage({
              path: edge.node.fields.slug,
              component: docPage,
              context: {
                slug: edge.node.fields.slug,
                prev,
                next,
                layout: 'docs'
              }
            })

            // console.log(relative)
          } else {
            createPage({
              path: edge.node.fields.slug,
              component: postPage,
              context: {
                slug: edge.node.fields.slug,
                prev,
                next
              }
            })
          }
        })

        let categories = []

        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category)
          }
        })

        categories = _.uniq(categories)

        categories = categories.filter(cat => cat !== 'docs')

        createPage({
          component: path.resolve(docsPage),
          path: '/docs'
        })

        categories.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}`,
            component: categoryPage,
            context: {
              category
            }
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })
}
