require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `UE Developer Pages`,
    description: `Template`,
    author: `@99XT`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'vi3cop8z',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }
  ]
};
