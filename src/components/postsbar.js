import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import '../styles/blog.css'

const PostsBar = () => {
	return (
		<StaticQuery query={graphql`
	query {
		allMarkdownRemark 
		(sort: {fields: [frontmatter___date], order: DESC})
		{
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
`}
			render={data => (
				<div className="posts-bar-wrap box">
					<h1>All Posts</h1>
					{data.allMarkdownRemark.edges.map(post => (
						<div className="posts-bar-item">
						<Link to={`/blog/${post.node.fields.slug}`} key={post.node.id}>
							<h3>{post.node.frontmatter.title}</h3>
							<small>Posted on {post.node.frontmatter.date}</small>
						</Link>
						</div>
					))}
				</div>
			)}
		/>
	)
}

export default PostsBar