import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import CTA from "./cta"
import useMatchMedia from "../hooks/useMatchMedia"
import styles from "./hero_image.module.css"

const HERO_BREAK = "(orientation:portrait)"

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      landscapeHero: file(relativePath: { eq: "hero-landscape.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 2910
            traceSVG: { background: "#f58851", color: "#2f1c30" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      portraitHero: file(relativePath: { eq: "hero-portrait.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1259
            traceSVG: { background: "#f58851", color: "#2f1c30" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const isPortrait = useMatchMedia(HERO_BREAK)

  const image = isPortrait
    ? data.portraitHero.childImageSharp.fluid
    : data.landscapeHero.childImageSharp.fluid

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Flamingo</h1>
        <h2 className={styles.subheadline}>A Planet of Giants EP</h2>
        <CTA text="Pre-Order Now" url="https://planetofgiants.bandcamp.com/" />
      </div>
      <Img
        className={styles.image}
        style={{ position: `absolute` }}
        fluid={image}
        imgStyle={{
          objectPosition: "bottom right",
        }}
      />
    </div>
  )
}

export default HeroImage
