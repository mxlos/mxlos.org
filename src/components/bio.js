/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(.5),
      }}
    >
      <p>
        Lorem ... 
      </p>
    </div>
  )
}

// const bioQuery = graphql`
//   query SiteInfoQuery {
//     # avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//     #   childImageSharp {
//     #     fixed(width: 50, height: 50) {
//     #       ...GatsbyImageSharpFixed
//     #     }
//     #   }
//     # }
//     site {
//       siteMetadata {
//         title
//         description
//         social {
//           twitter
//         }
//       }
//     }
//   }
// `

export default Bio
