import { Avatar, Flex, Heading } from "@chakra-ui/core";
import { useTheme } from "emotion-theming";
import React from "react";
import { AboutMeText } from "./AboutMeText";

export const AboutMe = () => {
	const theme = useTheme();
	return (
		<Flex height='100vh' bg='gray.701'>
			<Flex ml='4rem' justify='center' alignItems='center' direction='column'>
				<Heading
					as='h1'
					size='2xl'
					my={0}
					color='purple.101'
					fontWeight='normal'
				>
					About Me
				</Heading>
				<Heading
					as='h2'
					size='lg'
					fontFamily='PT Serif Caption'
					m='0 0 4rem 0'
					color='gray.901'
					fontWeight='normal'
				>
					Porque decir sobre mi no queda bien...
				</Heading>
				<Flex alignItems='center' mx='2rem' width='80%'>
					<Avatar src='/img/Avatar.jpg' width='30rem' height='30rem' />
					<AboutMeText />
				</Flex>
			</Flex>
		</Flex>
	);
};
