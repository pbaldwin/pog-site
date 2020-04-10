module.exports = {
  siteMetadata: {
    title: `Planet of Giants`,
    description: `The official website of Planet of Giants. Get the latest news, music, and information on the band.`,
    author: `@planetofgiants`,
    social_links: [
      {
        url: "https://instagram.com/planetofgiants",
        icon: "fab fa-instagram",
        name: "Instagram",
      },
      {
        url: "https://twitter.com/planetofgiants",
        icon: "fab fa-twitter",
        name: "Twitter",
      },
      {
        url: "https://facebook.com/planetofgiants",
        icon: "fab fa-facebook",
        name: "Facebook",
      },
      {
        url: "https://www.youtube.com/channel/UCTDZbanyW6WF_rBMITXXddA",
        icon: "fab fa-youtube",
        name: "YouTube",
      },
      {
        url: "https://open.spotify.com/artist/7HPVJvmbLZt9OiUUw87Upu",
        icon: "fab fa-spotify",
        name: "Spotify",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
