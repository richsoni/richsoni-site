module.exports = {
  plugins: [{
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'src/utils/typography.js',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/`,
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-remark',
  {
    resolve: 'gatsby-plugin-pathdata',
    options: {
      matchNodeType: 'MarkdownRemark',
      extract: [
        {
          name: 'path',
          selector: /.+\/(.*)\.md$/,
          replacer: '/$1/'
        },
        {
          name: 'date',
          selector: /.+\/(\d+-\d+-\d+)-[\w-]+\.md$/,
          replacer: '$1'
        }
      ]
    }
  }
]};
