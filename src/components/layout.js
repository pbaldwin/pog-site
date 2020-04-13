/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab, fas)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          social_links {
            icon
            name
            url
          }
          nav_links {
            name
            link
          }
          title
        }
      }
    }
  `)

  const header_social_criteria = ["Facebook", "Instagram", "YouTube", "Twitter"]

  const header_social = data.site.siteMetadata.social_links.filter(o => {
    return header_social_criteria.includes(o.name)
  })

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        socialLinks={header_social}
        navLinks={data.site.siteMetadata.nav_links}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
