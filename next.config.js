const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	reactStrictMode: false,
	images: {
		domains: ["avatars.githubusercontent.com"],
	},
	assetPrefix: isProd ? 'https://harimhetre.github.io/my-react-portfolio/' : ''
};
