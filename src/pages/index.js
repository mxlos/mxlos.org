import React from "react"
import { Link, graphql } from "gatsby"

import SiteInfo from "../components/siteInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={siteTitle}
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `opensource`, `mexicali`, `mexico`]}
        image={data.image.childImageSharp.fluid.src}
      />
      <SiteInfo />
      {data.allMeetupEvent.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link style={{ boxShadow: `none` }} to={`event/${node.local_date}`}>
              {node.fields.name}
            </Link>
          </h3>
          <small>{node.local_date}</small>
          <div dangerouslySetInnerHTML={{ __html: node.description }} />
        </div>
      ))}
      <h4>
        <Link style={{ boxShadow: `none` }} to={`events`}>
          ver todos los eventos
        </Link>
      </h4>
      <hr />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    image: file(absolutePath: { regex: "/mxlos-background.jpg/" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }

    # Meetup Events
    allMeetupEvent(filter: {name: {ne: "Reunión Mensual"}}, limit:1) {
      edges {
        node {
          id
          local_date
          description
          fields {
            name
          }
        }
      }
    }
  }
`
