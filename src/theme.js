import { extendTheme } from "@chakra-ui/core";

export const customTheme = extendTheme({
	/**COLORS OVERRIDE */
	colors: {
		transparent: "transparent",
		black: "#000",
		white: "#fff",
		purple: {
			101: "#C6BFCF",
			501: "#8C6291",
			801: "#5E3561",
			901: "#372640",
		},
		gray: {
			701: "#3C4854",
			901: "#21262E",
		},
	},

	/**FONTS OVERRIDE */
	fonts: {
		heading: '"Prosto One", cursive',
		body: '"PT Serif Caption", serif',
	},

	/**COMPONENT OVERRIDE */
	components: {
		Text: {
			baseStyle: {
				fontFamily: "body",
				m: "0",
			},
		},

		Button: {
			baseStyle: {
				fontFamily: "Prosto One",
				fontWeight: "normal",
				borderRadius: "8px",
			},

			sizes: {
				xl: {
					fontSize: "3xl",
					px: "100px",
					py: "10px",
				},
			},

			variants: {
				purple: {
					bg: "purple.801",
					color: "purple.101",
					_hover: { bg: "purple.501" },
				},
			},
		},
	},
});
