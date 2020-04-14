import React from "react"
import styles from "./youtube_embed.module.css"

const YouTubeEmbed = ({ title, src }) => (
  <div className={styles.wrapper}>
    <iframe
      className={styles.video}
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title={title}
    ></iframe>
  </div>
)

export default YouTubeEmbed
