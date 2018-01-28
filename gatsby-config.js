const rupture = require('rupture');
module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: 'src/utils/typography'
			}
		},
		{
			resolve: `gatsby-plugin-stylus`,
			options: {
				use: [ rupture() ]
			}
		}
	]
};
