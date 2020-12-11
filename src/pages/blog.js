import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

import '../styles/blog.css'

export const pageQuery = graphql`
query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						date
					}
					fields {
						slug
					}
				}
			}
	}
}
`

const BlogPage = ({data}) => (
	<Layout title="Blog" headerStyle={{fontFamily: 'Special Elite', paddingTop: '10px'}}>
		<section className="blog-page">
			<div className="box">
			<h1>Latest Posts</h1>
			{data.allMarkdownRemark.edges.map(post => (
				<Link to={`/blog/${post.node.fields.slug}`} key={post.node.id}>
					<h3>{post.node.frontmatter.title}</h3>
					<small>Posted on {post.node.frontmatter.date}</small>
				</Link>
			))}
		</div>
		<div className="box">All Posts</div>
		</section>
	</Layout>
)

export default BlogPage
