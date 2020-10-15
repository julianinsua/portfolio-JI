import {
	Flex,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Slider,
	Box,
	Tooltip,
	Heading,
} from "@chakra-ui/core";
import React, { Children } from "react";

export const SkillSlider = (props) => {
	return (
		<Flex width='16rem' ml='2rem' mt='2rem' flexDirection='column'>
			<Heading as='h3' size='md' color='purple.101'>
				{props.label}
			</Heading>
			<Slider defaultValue={props.value} focusThumbOnChange={false} isReadOnly>
				<SliderTrack bg='purple.101' borderRadius='0.5rem'>
					<SliderFilledTrack bg='purple.801' />
				</SliderTrack>
				<Tooltip label={props.label} placement='right' hasArrow>
					<SliderThumb width='3rem' height='3rem' bg='gray.701'>
						<Box p='0.2rem'>{props.icon}</Box>
					</SliderThumb>
				</Tooltip>
			</Slider>
		</Flex>
	);
};
