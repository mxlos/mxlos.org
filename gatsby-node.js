const path = require(`path`);
const dateFormat = require('date-fns/format');
const es = require('date-fns/locale/es');

const ucfirst = text => text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
      {
        # Blog Posts
        allMarkdownRemark(
          filter: {fields: {slug: {regex: "/blog/"}}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
              }
            }
          }
        }
        # Meetup Events
        allMeetupEvent(filter: {name: {ne: "Reunión Mensual"}}) {
          edges {
            node {
              id
              name
              local_date
              venue {
                id
                name
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/templates/blog.js`),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create blog posts pages.
    const events = result.data.allMeetupEvent.edges
    events.forEach(({ node }) => {
      createPage({
        path: `event/${node.local_date}`,
        component: path.resolve(`./src/templates/event.js`),
        context: {
          id: node.id,
        },
      })
    });

    return null
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = node.frontmatter.path;
    createNodeField({
      name: `slug`,
      node,
      value: slug
    })
  }

  if (node.internal.type === `MeetupEvent`) {
    let nodeName = node.name;
    if (nodeName === 'Reunión Mensual 2018') {
      const monthYear = dateFormat(new Date(node.local_date), 'MMMM YYYY', {locale: es});
      nodeName = `Reunión Mensual ${monthYear}`;
    }
    createNodeField({
      node,
      name: `name`,
      value: ucfirst(nodeName),
    });
  }
}
