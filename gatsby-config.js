const { createProxyMiddleware } = require('http-proxy-middleware')
const config = require('./config/SiteConfig')
const languages = require('./config/languages')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  // development api proxying
  developMiddleware: app => {
    app.use(
      '/api/gateway/',
      createProxyMiddleware({
        target: 'http://localhost:7001',
        pathRewrite: {
          '/api/gateway/': ''
        }
      })
    )
  },

  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    languages
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langeyDefault: languages.defaultLangKey,

        useLangKeyLayout: false,
        prefixDefault: false,
        pagesPath: ['/src/pages', '/src/templates']
      }
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/TransitionWrapper`)
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon
      }
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-pace',
      options: {
        theme: 'minimal',
        color: 'white',
        cdn: 'https://cdn.bootcdn.net/ajax/libs/pace/1.0.2/pace.min.js'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer'
            }
          },

          'gatsby-remark-responsive-iframe',
          'gatsby-remark-script',
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    },
    'gatsby-plugin-meta-redirect'
  ]
}
