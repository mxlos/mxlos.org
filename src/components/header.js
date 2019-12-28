import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
    <header
      style={{
        background: `#424242`,
        color: `#fff`,
        padding: `1rem`,
      }}>
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: `1rem`,
          display: `inline-block`
        }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
      <Link style={{
        color: `inherit`,
        position: `absolute`,
        right: 50,
        fontSize: `1.3rem`,
      }} to="/blogs/">Blog</Link>
    </header>
  )
}

export default Header
