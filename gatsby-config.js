module.exports = {
  siteMetadata: {
    title: "Burrito's Blog"
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/`,
				name: 'pages'
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						options: {
							maxWidth: 750,
							linkImagesToOriginal: true
						}
					}
				]
			}
		}
	]
}
