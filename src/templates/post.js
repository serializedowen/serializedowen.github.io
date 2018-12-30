import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, Subline, SEO, PrevNext, Content } from 'components';
import config from '../../config/SiteConfig';
import '../utils/medium-editor.css';
import '../utils/prismjs-theme.css';

// using import cause failure at production build
const MediumEditor = require('medium-editor');

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  outline: none;
  margin-top: 4rem;
`;

class Post extends Component {
  componentDidMount() {
    this.editor = new MediumEditor('.editable', { elementsContainer: document.querySelector('#medium-toolbar') });
  }

  componentWillUnmount() {
    this.editor = null;
  }

  render() {
    const {
      pageContext: { slug, prev, next },
      data: { markdownRemark: postNode },
    } = this.props;
    const post = postNode.frontmatter;
    return (
      <Layout>
        <Wrapper>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Helmet title={`${post.title} | ${config.siteTitle}`} />
          <Header>
            <Link to="/">{config.siteTitle}</Link>
          </Header>
          <Content>
            <Title>{post.title}</Title>
            <div id="medium-toolbar" />
            <Subline>
              {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
              <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
            </Subline>
            <PostContent className="editable" dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <PrevNext prev={prev} next={next} />
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}

// const Post = ({ pageContext: { slug, prev, next }, data: { markdownRemark: postNode } }) => {
//   const post = postNode.frontmatter;

//   return (
//     <Layout>
//       <Wrapper>
//         <SEO postPath={slug} postNode={postNode} postSEO />
//         <Helmet title={`${post.title} | ${config.siteTitle}`} link={[{ rel: 'stylesheet' }]} />

//         <Header>
//           <Link to="/">{config.siteTitle}</Link>
//         </Header>
//         <Content>
//           <Title>{post.title}</Title>
//           <Subline>
//             {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
//             <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
//           </Subline>
//           <PostContent className="editable" dangerouslySetInnerHTML={{ __html: postNode.html }} />
//           <PrevNext prev={prev} next={next} />
//         </Content>
//       </Wrapper>
//     </Layout>
//   );
// };

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
};

export const postQuery = graphql`
  query postBySlug($slug: String!) {
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
`;
