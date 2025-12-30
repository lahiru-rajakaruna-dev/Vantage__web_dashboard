module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
      	// default prefix is "ui"
		require("@kobalte/tailwindcss"),
		// or with a custom prefix:
		require("@kobalte/tailwindcss")({ prefix: "kb" }),
  ],
}
