const path = require('path');
const buildExtraMarkdownFields = require('./lib/MarkdownFields');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if(node.internal.type === 'MarkdownRemark'){
    extraFields = buildExtraMarkdownFields({ node, getNode})
    Object.keys(extraFields).map((k) => {
      const value = extraFields[k];
      createNodeField({
        node,
        name: k,
        value: value,
      });
    })
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
                url
                relativeDirectory
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.url,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            url: node.fields.url,
          }
        })
        createRedirect({
          fromPath: node.fields.url.replace(/\/$/, '')+'.html',
          toPath: node.fields.url, isPermanent: true,
          redirectInBrowser: true,
        });
        createRedirect({
          fromPath: node.fields.url.replace(/\/$/, ''),
          toPath: node.fields.url, isPermanent: true
        });
      });
      resolve();
    })
  });
}
