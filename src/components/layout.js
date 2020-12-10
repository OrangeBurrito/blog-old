import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import '../styles/style.css'

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
	`)
	
  return (
    <main>
			<Header title={props.title}/>
			{props.children}
			<Footer/>
    </main>
  )
}

export default Layout
