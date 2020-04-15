import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "./content.module.css"
import Img from "gatsby-image"
import CTA from "../components/cta"

const VideoPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Planet of Giants Biography" />
      <div className={contentStyles.wrapper}>
        <h1 className={contentStyles.headline} style={{ textAlign: "center" }}>
          Listen to Planet of Giants
        </h1>
        {data.allAlbumsJson.edges.map(({ node }) => (
          <article className={contentStyles.content}>
            <Img fluid={node.cover.childImageSharp.fluid} />
            <div>
              <h1>{node.title}</h1>
              <p>{node.description}</p>
              <CTA text={node.bandcamp_text} url={node.bandcamp_link} />
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export default VideoPage

export const query = graphql`
  query RecordPageQuery {
    allAlbumsJson {
      edges {
        node {
          title
          description
          bandcamp_link
          bandcamp_text
          cover {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
