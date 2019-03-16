import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class EventTemplate extends React.Component {
  render() {
    const event = this.props.data.meetupEvent
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
        <Bio />
      </Layout>
    )
  }
}

export default EventTemplate

export const pageQuery = graphql`
  query EventById($id: String!) {
    site {
      siteMetadata {
        title
        author
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