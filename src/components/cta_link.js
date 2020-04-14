import React from "react"
import { Link } from "gatsby"
import styles from "./cta.module.css"

// Wraps gatsby link for CTA style use.
const CTALink = ({ text, url }) => (
  <Link className={styles.cta} to={url}>
    {text}
  </Link>
)

export default CTALink
