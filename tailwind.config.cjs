module.exports = {
	content: ['src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				gentium: ['Gentium Plus', 'serif'],
				persian: ['Scheherazade New', 'serif']
			},
			screens: {
				anyfine: { raw: '(any-pointer: fine)' }
			}
		}
	},
	plugins: []
};
