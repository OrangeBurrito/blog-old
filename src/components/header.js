import React from "react"
import {Link} from 'gatsby'

import '../styles/style.css'

const Header = ({ title, headerStyle }) => (
  <header>
		<h1 className="box" style={headerStyle}>{title}</h1>
    <nav className="box">
        <Link to="/">Home</Link>
        <Link style={{fontFamily: 'Special Elite', paddingTop: '8px'}} to="/blog">Blog</Link>
        <Link to="/about">About</Link>
    </nav>
  </header>
)

export default Header