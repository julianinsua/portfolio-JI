import React from "react";
import {
	Button,
	Flex,
	Heading,
	Icon,
	Image,
	Text,
	useTheme,
} from "@chakra-ui/core";

export const HomePage = () => {
	const theme = useTheme();
	return (
		<Flex>
			<Flex>
				<Image
					src='/img/bg_img.jpg'
					position='absolute'
					zIndex={0}
					height='100vh'
					width='100%'
				/>
				<Flex
					position='absolute'
					zIndex={1}
					color='#fff'
					bg='#b6bfcf'
					width='100%'
					height='100vh'
					opacity='50%'
				/>
			</Flex>
			<Flex position='absolute' zIndex={3} direction='row'>
				<Flex alignItems='center' justify='center'>
					<Image
						src='/img/favicon.svg'
						bg='#ffffff00'
						alignSelf='center'
						width='25vw'
						ml='10em'
					/>
				</Flex>
				<Flex
					display='flex'
					justify='center'
					alignItems='center'
					width='100%'
					height='100vh'
					direction='column'
					ml='10em'
				>
					<Text
						fontSize={36}
						textAlign='left'
						width='100%'
						ml='50%'
						color='gray.901'
					>
						A Portfolio by
					</Text>
					<Heading as='h1' fontSize={96} color='#21262E' mt={0}>
						Julian Insua
					</Heading>
					<Button variant='purple' size='xl'>
						ABOUT ME
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};
