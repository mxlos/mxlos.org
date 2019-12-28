import React from "react"

const Footer = () => {

  return (
    <footer style={{
      textAlign: `center`,
      background: `#424242`,
      color: `#fff`,
      padding: `1rem`,
      bottom: 0,
      position: `absolute`,
      width: `100%`,
    }}>
      © {new Date().getFullYear()}, Built with
        {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
