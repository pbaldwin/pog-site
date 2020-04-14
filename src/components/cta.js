import React from "react"
import styles from "./cta.module.css"

const CTA = ({ text, url }) => (
  <a href={url} className={styles.cta}>
    {text}
  </a>
)

export default CTA
