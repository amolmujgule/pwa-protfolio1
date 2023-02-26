module.exports = {
	globDirectory: 'assests/',
	globPatterns: [
		'**/*.{png,jpeg,js}'
	],
	swDest: 'assests/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};