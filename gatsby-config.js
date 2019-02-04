module.exports = {
  siteMetadata: {
    name: `Sara Vieira`,
    title: `AgentConf 🇦🇹`,
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
  ],
};
