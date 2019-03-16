import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `opensource`, `mexicali`, `mexico`]}
        />
        <Bio />
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
        <hr />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    # Blog posts
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
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
