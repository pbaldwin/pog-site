import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useMatchMedia from "../hooks/useMatchMedia"

import styles from "./navigation.module.css"

const NAV_BREAKPOINT = "(max-width: 1024px)"

const HamburgerNav = ({ links }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <div className={styles.hamburgerWrapper}>
      <button
        type="button"
        className={styles.control}
        onClick={() => setNavIsOpen(true)}
      >
        <FontAwesomeIcon icon="bars" />
      </button>
      <nav
        className={navIsOpen ? styles.hamburgerNav : styles.hamburgerNavClosed}
      >
        <ul className={styles.navList}>
          {links.map(({ link, name }) => (
            <li key={`link-${name}`}>
              <Link className={styles.navLink} to={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={styles.navClose}
          type="button"
          onClick={() => setNavIsOpen(false)}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </nav>
      {/* The <div> element is a secondary control for closing the menu */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className={navIsOpen ? styles.navCurtain : styles.navCurtainClosed}
        onClick={() => (navIsOpen ? setNavIsOpen(false) : null)}
      />
    </div>
  )
}

const StandardNav = ({ links }) => (
  <nav>
    <ul className={styles.standardNav}>
      {links.map(({ link, name }) => (
        <li key={`link-${name}`}>
          <Link to={link}>{name}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

const Navigation = ({ links }) => {
  const showHamburger = useMatchMedia(NAV_BREAKPOINT)
  return (
    <>
      {showHamburger && <HamburgerNav links={links} />}
      {!showHamburger && <StandardNav links={links} />}
    </>
  )
}

export default Navigation
