import React from 'react'

const PostsBar = () => {
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
		<div>
			
		</div>
	)
}

export default PostsBar