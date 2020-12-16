import React from "react"
import Layout from '../components/layout'
import PostsBar from '../components/postsbar'

import '../styles/style.css'

const IndexPage = () => (
	<Layout title="Home">
		<h1>Helo</h1>
		<PostsBar/>
	</Layout>
)

export default IndexPage
