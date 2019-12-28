import React from "react"

import { rhythm } from "../utils/typography"
import Header from '../components/header'
import Footer from '../components/footer'

require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("./layout.css")

const Layout = ({ title, children }) => {
  return (
    <div style={{ position: `relative`, minHeight: `100vh` }}>
      <Header title={title}></Header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
