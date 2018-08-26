import React from "react";
import Link from 'gatsby-link';

export default ({data}) => {
  console.log(data.allMarkdownRemark.edges[0].node.frontmatter);
return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
         <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <div key={node.id}>
              <h3>
                {node.frontmatter.title}{" "}
                <span color="#BBB">— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          </Link>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [fields___date] }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            date
          }
          excerpt
        }
      }
    }
  }
`
