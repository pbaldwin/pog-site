import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navigation from "./navigation"
import styles from "./header.module.css"

const Header = ({ siteTitle, socialLinks, navLinks }) => (
  <header className={styles.header}>
    <Navigation links={navLinks} />
    <h1 className={styles.headline}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav className={styles.socialLinksWrapper}>
      <ul className={styles.socialLinks}>
        {socialLinks.map((l, i) => {
          return (
            <li key={`hsi-${i}`}>
              <a href={l.url}>
                <FontAwesomeIcon icon={["fab", l.icon]} />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  socialLinks: PropTypes.array,
  navLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  socialLinks: [],
  navLinks: [],
}

export default Header
