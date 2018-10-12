module.exports = {
  siteMetadata: {
    title: 'Erg-Reg',
    description: 'Morocco and the Sahara',
    author: 'Raf Verbeelen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages`,
      name: "pages",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'erg-reg',
        short_name: 'erg-reg',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
