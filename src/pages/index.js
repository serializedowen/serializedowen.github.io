import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Article, Wrapper, Button, SectionTitle, Content } from 'components'
import { media } from '../utils/media'
import withENLayout from 'src/layouts/withENLayout'
import LoadMore from 'src/components/LoadMore'
let isSSR = true

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`

const IndexPage = () => {
  const [postLimit, setpostLimit] = useState(10)
  useEffect(() => {
    isSSR = false
  }, [])

  const {
    allMarkdownRemark: { edges: postEdges }
  } = useStaticQuery(graphql`
    query IndexQuery {
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
  `)

  return (
    <Wrapper>
      <Hero>
        <h1 style={{ color: 'white' }}>
          <FormattedMessage id="greeting"></FormattedMessage>
          {/* Howdy. */}
        </h1>
        <p style={{ color: 'white' }}>
          I'm SerializedOwen, a Full-stack Web Developer with five years of
          industry experience
        </p>

        <Link to="/contact">
          <Button big>
            <svg
              width="1792"
              height="1792"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
            </svg>
            <FormattedMessage id="contact"></FormattedMessage>
          </Button>
        </Link>
      </Hero>
      <Content>
        <SectionTitle>Latest stories</SectionTitle>

        {postEdges
          .filter((_, index) => {
            if (isSSR) return index < 10
            else return index < postLimit
          })
          .map(post => (
            <Article
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              category={post.node.frontmatter.category}
              key={post.node.fields.slug}
            />
          ))}

        <LoadMore
          hasMore={postLimit < postEdges.length}
          loader={() => setpostLimit(val => val + 10)}
        ></LoadMore>
      </Content>
    </Wrapper>
  )
}

export default withENLayout(IndexPage)
export { IndexPage }
