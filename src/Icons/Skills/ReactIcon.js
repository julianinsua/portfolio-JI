import React from "react";

export const ReactIcon = () => {
	return (
		<img src='data:image/png;base64,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' />
	);
};