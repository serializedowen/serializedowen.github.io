import withZHLayout from 'src/layouts/withZHLayout'
import { Category } from './categories'
import { graphql } from 'gatsby'
export default withZHLayout(Category)
export const postQuery = graphql`
  query CategoriesPage2 {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
