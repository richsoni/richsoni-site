const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if(node.internal.type === 'MarkdownRemark'){
    const parent = getNode(node.parent);
    const slug = '/'+parent.relativeDirectory+createFilePath({ node, getNode, basePath: 'posts' });
    createNodeField({
      node,
      name: 'slug',
      value: slug.replace("(","").replace(")", ""),
    });
    createNodeField({
      node,
      name: 'relativeDirectory',
      value: parent.relativeDirectory,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const {createPage, createRedirect } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                relativeDirectory
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            slug: node.fields.slug,
          }
        })
        createRedirect({
          fromPath: node.fields.slug.replace(/\/$/, '')+'.html',
          toPath: node.fields.slug, isPermanent: true,
          redirectInBrowser: true,
        });
        createRedirect({
          fromPath: node.fields.slug.replace(/\/$/, ''),
          toPath: node.fields.slug, isPermanent: true
        });
      });
      resolve();
    })
  });
}
