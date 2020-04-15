import React from "react"
import styles from "./youtube_embed.module.css"

const YouTubeEmbed = ({ title, id }) => (
  <div className={styles.wrapper}>
    <iframe
      className={styles.video}
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
  </div>
)

export default YouTubeEmbed
