module.exports = {
  siteMetadata: {
    title: `Sean Dees`,
    description: 'Sean Dees portfolio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `dosis`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      },
      
    }, {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.ico",
  
        // WebApp Manifest Configuration
        appName: 'Gatsby site',
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
}

