import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import PostsBar from '../components/postsbar'
import '../styles/blog.css'

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
		<Layout title="Blog" headerStyle={{fontFamily: 'Special Elite', paddingTop: '10px'}}>
			<section class="post-wrap">

				<div class="post-header">
					<div class="header-name box level">
						<h1>{props.data.markdownRemark.frontmatter.title}</h1>
						<p>{props.data.markdownRemark.frontmatter.date}</p>		
					</div>

					<Link className="back-button" to="/blog">Back To Posts</Link>
				</div>

				<div class="post-content content box" dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>

				{/* <div className="post-aside box">Read More</div> */}
				<PostsBar/>
			</section>
			{/* <section class="blog-posts">
				<div className="blog-header box">
					<div className="header-name">
					<h1>{props.data.markdownRemark.frontmatter.title}</h1>
					<p>{props.data.markdownRemark.frontmatter.date}</p>		
					</div>
					<button id="back-button">Back To Posts</button>
				</div>
			<div className="content blog-content box" dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
			<div className="more-posts box">More Posts</div>
			</section> */}
		</Layout>
	)
}

export default Blog