import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "./content.module.css"
import YouTubeEmbed from "../components/youtube_embed"

const VideoPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Planet of Giants Biography" />
      <div className={contentStyles.wrapper}>
        <h1 className={contentStyles.headline}>See Planet of Giants Rock</h1>
        <article className={contentStyles.fullwidth}>
          {data.allVideosJson.edges.map(({ node }) => {
            return <YouTubeEmbed id={node.id} title={node.title} />
          })}
        </article>
      </div>
    </Layout>
  )
}

export default VideoPage

export const query = graphql`
  query VideoPageQuery {
    allVideosJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
