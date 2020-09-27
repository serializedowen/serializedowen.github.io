import withZHLayout from 'src/layouts/withZHLayout'
import { graphql } from 'gatsby'
import Post from './post'

export default withZHLayout(Post)

export const postQuery = graphql`
  query postBySlug2($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
      }
      timeToRead
    }
  }
`
