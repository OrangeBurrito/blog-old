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
    <div className="wrap">
			<Header title={props.title} headerStyle={props.headerStyle}/>
			<div className="content">
				{props.children}
			</div>
			<Footer/>
    </div>
  )
}

export default Layout
