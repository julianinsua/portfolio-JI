import { Flex } from "@chakra-ui/core";
import React from "react";

export const Tricotta = () => {
	return (
		<Flex height='48px' my='0.5rem'>
			<img src='data:image/png;base64,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'></img>
		</Flex>
	);
};