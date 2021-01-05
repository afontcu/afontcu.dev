module.exports = {
  siteMetadata: {
    title: `Adrià Fontcuberta`,
    author: `Adrià Fontcuberta`,
    description: `I'm Adrià Fontcuberta, a software engineer interested in lean development, mostly focused on the front end, UX, and everything in between`,
    siteUrl: `https://afontcu.dev/`,
    social: {
      twitter: `afontq`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139198326-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adrià Fontcuberta`,
        short_name: `afontcu.dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#134896`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {
                vue: 'markup',
              },
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 675,
              related: false,
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
              quality: 80,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://google.com', 'https://marketingplatform.google.com'],
      },
    },
  ],
}
