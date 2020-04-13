import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./footer.module.css"

const Footer = ({ navLinks, socialLinks }) => (
  <footer className={styles.footer}>
    <div className={styles.footerSection}>
      <h1 className={styles.bandLogo}>Planet of Giants</h1>
    </div>
    <nav className={styles.footerSection}>
      <ul className={styles.navigation}>
        {navLinks.map(({ link, name }) => (
          <li key={`link-${name}`}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <nav className={styles.footerSection}>
      <ul className={styles.socialLinks}>
        {socialLinks.map((l, i) => {
          return (
            <li key={`fsi-${i}`}>
              <a href={l.url}>
                <FontAwesomeIcon icon={["fab", l.icon]} />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
    <div className={styles.copyright}>
      © {new Date().getFullYear()} Planet of Giants. All Rights Reserved.
    </div>
  </footer>
)

Footer.propTypes = {
  socialLinks: PropTypes.array,
  navLinks: PropTypes.array,
}

Footer.defaultProps = {
  socialLinks: [],
  navLinks: [],
}

export default Footer
