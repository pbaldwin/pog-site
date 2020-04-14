import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contentStyles from "./content.module.css"

import Image from "../components/images/band_bio_image"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Planet of Giants Biography" />
      <div className={contentStyles.wrapper}>
        <article className={contentStyles.content}>
          <div>
            <Image />
            <hr />
            <h1>Tacoma Rock n' Roll</h1>
            <p>
              Planet of Giants is a two piece band from Tacoma that combines
              American and British blues with the decidedly northwest garage
              rock ethos and attitude. The result: three minute bursts of fuzzed
              out, driving blues hooks, and infectious melodies laid over groove
              heavy percussive bombast that is both soulful and dynamic. With
              each new release, singer/guitarist Patrick Baldwin and drummer
              Eric Thompson continue to create a sound as big as the band name
              implies.
            </p>

            <p>
              After years of playing together in various South Puget Sound
              bands, Baldwin and Thompson came together in 2012 with one goal in
              mind: create stripped down, raw, powerful rock and roll tunes that
              get bodies moving. Thus, Planet of Giants was born. 2013 saw the
              release of the band’s first EP, the erroneously titled “E.P. Dos”.
              Nikki McCoy of the Weekly Volcano (Tacoma, Wa) praised the EP for
              its “low-fi, stripped down, blues and rock and roll sound”. After
              a steady stream of live shows throughout the Puget Sound region,
              Planet of Giants enlisted the help of David Minor at Chartreuse
              Muffin Studios (Shoreline, Wa) to record 2015’s less Low-fi but no
              less rockin’ LP, “That Electric Sound”. The album captures the
              intensity, energy,and emotion that Planet of Giants bring to their
              live shows.
            </p>

            <p>
              The EP "Flamingo", Planet of Giants' first release of new music in
              5 years, sees the duo experiment with an expanded sonic palette,
              while maintaining the powerful grooves, dirty guitars, and high
              energy signature of the band's previous material. Layered guitars
              and a frenetic vocal delivery help to fuel the lead single, "Pile
              of Amphetamines"—a driving, synthetic, riff-rock burner about
              love, loss, and toxic behavior. While "Immolation Blues"—a fuzzy,
              slow-burning, ballad dealing with stress and feelings of
              helplessness—Perfectly demonstrates the bands classic heavy blues
              approach yet it is infused with ominous church organs and drippy
              guitar lines that evoke an eerie, David Lynchian atmosphere that
              fits so well with the Pacific North West.
            </p>

            <p>
              Planet of Giants may be a small, simple, stripped down band, but
              expect to see and hear big things from them. “Flamingo” is just
              the next step for these “two genuine dudes that just want to rock”
              (Nikki McCoy, Weekly Volcano).
            </p>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default AboutPage
