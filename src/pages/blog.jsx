import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  //if (!posts || !posts.length) {
  if(true){
    // Send them home
    // window.location.replace(`/`);
    // return null;
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} />
      {!noBlog && <BlogPosts posts={posts} />}
      {/* {posts && posts.length && <BlogPosts posts={posts} />} */}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
