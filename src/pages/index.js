import React from "react"

import Layout from "../components/layout"
import HeroImage from "../components/hero_image"
import CTA from "../components/cta"
import CTALink from "../components/cta_link"
import YouTubeEmbed from "../components/youtube_embed"
import SEO from "../components/seo"
import FlamingoRecordCover from "../components/images/flamingo_record_cover"
import contentStyles from "./content.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Official Website" />
    <HeroImage />
    <div className={contentStyles.wrapper}>
      <article className={contentStyles.content}>
        <YouTubeEmbed
          id="-1qi03Ib0tI"
          title="The New Single from Flamingo: Pile of Amphetamines"
        />
      </article>
      <article className={contentStyles.content}>
        <FlamingoRecordCover />
        <div>
          <h1>Flamingo</h1>
          <p>
            The EP "Flamingo"&mdash;Planet of Giants' first release of new music
            in 5 years&mdash;sees the band experiment with an expanded sonic
            palette, while maintaining the powerful grooves, dirty guitars, and
            high energy signature of the band's previous material.
          </p>
          <p>
            Layered guitars and a frenetic vocal delivery help to fuel the lead
            single, "Pile of Amphetamines"—a driving, synthetic, riff-rock
            burner about love, loss, and toxic behavior. While "Immolation
            Blues"—a fuzzy, slow-burning, ballad dealing with stress and
            feelings of helplessness—Perfectly demonstrates the bands classic
            heavy blues approach yet it is infused with ominous church organs
            and drippy guitar lines that evoke an eerie, David Lynchian
            atmosphere that fits so well with the Pacific North West.
          </p>
          <CTA text="Buy Now" url="https://planetofgiants.bandcamp.com/" />
        </div>
      </article>
      <h1 className={contentStyles.headline}>See Planet of Giants Rock</h1>
      <article className={contentStyles.fullwidth}>
        <YouTubeEmbed
          id="RDj-3JeMfvE"
          title="Live from the Living Room: 1970 Challenger (Kowalski's Song)"
        />
        <YouTubeEmbed
          id="6uODIfyD-K4"
          title="Live from the Living Room: Stetson Hat"
        />
        <YouTubeEmbed
          id="vdmKbqFAyCM"
          title="Live from the Living Room: Pale Horse"
        />
      </article>
      <CTALink url="/videos" text="Watch More" />
    </div>
  </Layout>
)

export default IndexPage
