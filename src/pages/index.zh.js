import { IndexPage } from './index'
import withENLayout from 'src/layouts/withZHLayout'
import { graphql } from 'gatsby'
// console.log(IndexPage)
export default withENLayout(IndexPage)

export const IndexQuery = graphql`
  query IndexQuery1 {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            category
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
