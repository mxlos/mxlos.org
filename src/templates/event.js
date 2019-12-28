import React from "react"
import { graphql } from "gatsby"

import SiteInfo from "../components/siteInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const EventTemplate = ({ data, location }) => {
  const event = data.meetupEvent
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={event.name}
        description={event.description}
      />
      <h1>{event.name}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {event.local_date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: event.description }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <SiteInfo />
    </Layout>
  )
}

export default EventTemplate

export const pageQuery = graphql`
  query EventById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    meetupEvent(id: {eq: $id}) {
      id
      name
      local_date
      created
      description
      link
      venue {
        id
        name
      }
    }
  }
`