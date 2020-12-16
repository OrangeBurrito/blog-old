import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import PostsBar from '../components/postsbar'

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
					html
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
			<div className="latest-posts box">
			<h1>Latest Posts</h1>
			{/* <div class="post-content content box" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div> */}
			
		</div>
		<PostsBar/>
		</section>
	</Layout>
)

export default BlogPage
