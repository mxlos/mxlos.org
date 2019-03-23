/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

function SiteInfo() {
  return (
    <StaticQuery
      query={siteInfoQuery}
      render={data => {
        const { social, description } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <p>
              {description}
              <a href={`https://twitter.com/${social.twitter}`}>
                Puedes seguirnos en Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const siteInfoQuery = graphql`
  query SiteInfoQuery {
    # avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    #   childImageSharp {
    #     fixed(width: 50, height: 50) {
    #       ...GatsbyImageSharpFixed
    #     }
    #   }
    # }
    site {
      siteMetadata {
        title
        description
        social {
          twitter
        }
      }
    }
  }
`

export default SiteInfo
