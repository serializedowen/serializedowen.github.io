const path = require('path')
const _ = require('lodash')
const { writeFile } = require('fs')

const searchData = []

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  let slug
  if (node.internal.type === 'MarkdownRemark') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'sourceType') &&
      node.sourceType === 'docs'
    ) {
      slug = `/${path.relative(
        __dirname,
        path.parse(node.fileAbsolutePath).dir
      )}/${_.kebabCase(node.frontmatter.slug || node.frontmatter.title)}`

      // add package name as a metadatafield

      const packageName = path
        .relative(__dirname, path.parse(node.fileAbsolutePath).dir)
        .split(path.sep)[1]

      createNodeField({
        node,
        name: 'package',
        value: packageName
      })
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

exports.onPostBuild = async ({ actions }, pluginOptions) => {
  const savePath = path.join('./public', 'search-data.json')
  return new Promise((resolve, reject) => {
    writeFile(savePath, JSON.stringify(searchData), resolve)
  })
}

exports.onCreatePage = ({ page, actions }) => {
  // console.log(page)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // createRedirect({
  //   fromPath: '/docs/react-router-dom',
  //   toPath: '/docs/react-router-dom/向导/快速开始',
  //   isPermanent: false
  // })
  const asyncDoc = new Promise((resolve, reject) => {
    const docsPage = path.resolve('src/templates/docs.js')
    const docPage = path.resolve('src/templates/doc.js')

    resolve(
      graphql(`
        {
          docs: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
          ) {
            edges {
              node {
                fileAbsolutePath
                sourceType
                fields {
                  package
                  slug
                }
                frontmatter {
                  title
                  category
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

        const docs = result.data.docs.edges.filter(
          edge => edge.node.sourceType === 'docs'
        )

        docs.forEach((edge, i) =>
          createPage({
            path: edge.node.fields.slug,
            component: docPage,
            context: {
              package: edge.node.fields.package,
              slug: edge.node.fields.slug,
              prev: docs[i - 1],
              next: docs[i + 1],
              layout: 'docs'
            }
          })
        )
      })
    )
  })

  const asyncPost = new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/post.js')
    const categoryPage = path.resolve('src/templates/category.js')
    const docsPage = path.resolve('src/templates/docs.js')
    const docPage = path.resolve('src/templates/doc.js')
    resolve(
      graphql(`
        {
          posts: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
          ) {
            edges {
              node {
                fileAbsolutePath
                fields {
                  slug
                }
                sourceType
                frontmatter {
                  title
                  category
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

        const posts = result.data.posts.edges.filter(
          edge => edge.node.sourceType === 'posts'
        )

        posts.forEach((edge, index) => {
          const next = index === 0 ? null : posts[index - 1].node
          const prev = index === posts.length - 1 ? null : posts[index + 1].node

          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug,
              prev,
              next
            }
          })
        })

        let categories = []

        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category)
          }
        })

        categories = _.uniq(categories)

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

  return Promise.all([asyncDoc, asyncPost])
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    }
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        config: path.resolve(__dirname, 'config')
      }
    }
  })
}
