import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import '../styles/blog-style.css'

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`

const Blog = (props) => {
	return (
		<Layout title="Blog">
			<section class="blog-posts">
				<div className="blog-header box">
					<h1>{props.data.markdownRemark.frontmatter.title}</h1>
					<p>{props.data.markdownRemark.frontmatter.date}</p>		
					<div style={{backgroundColor: "#292B2E", padding: "0.5rem"}}>Tag Here</div>
				</div>
			<div className="box blog-content" dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
			<div className="more-posts box">More Posts</div>
			</section>
		</Layout>
	)
}

export default Blog