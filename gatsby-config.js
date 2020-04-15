const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Planet of Giants`,
    description: `The official website of Planet of Giants. Get the latest news, music, and information on the band.`,
    author: `@planetofgiants`,
    nav_links: [
      { link: "/records", name: "Music" },
      { link: "/videos", name: "Videos" },
      { link: "/about", name: "About" },
    ],
    social_links: [
      {
        url: "https://facebook.com/planetofgiants",
        icon: "facebook",
        name: "Facebook",
      },
      {
        url: "https://www.youtube.com/channel/UCTDZbanyW6WF_rBMITXXddA",
        icon: "youtube",
        name: "YouTube",
      },
      {
        url: "https://instagram.com/planetofgiants",
        icon: "instagram",
        name: "Instagram",
      },
      {
        url: "https://twitter.com/planetofgiants",
        icon: "twitter",
        name: "Twitter",
      },
      {
        url: "https://open.spotify.com/artist/7HPVJvmbLZt9OiUUw87Upu",
        icon: "spotify",
        name: "Spotify",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157079926-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2f1c30`,
        theme_color: `#2f1c30`,
        display: `minimal-ui`,
        icon: `src/images/flamingo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
