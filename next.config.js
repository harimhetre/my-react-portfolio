const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	reactStrictMode: false,
	images: {
		domains: ["avatars.githubusercontent.com"],
	},
	assetPrefix: isProd ? '/my-react-portfolio/' : ''
};
