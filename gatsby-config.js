module.exports = {
  siteMetadata: {
    name: `Sara Vieira`,
    title: `Build Dumb Shit`,
    date: `@NikkitaFTW`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/assets`,
        destination: '/assets',
      },
    },
  ],
};
