import { Flex, Heading } from "@chakra-ui/core";
import React from "react";

export const History = () => {
	return (
		<Flex
			height='100vh'
			bg='gray.901'
			name='history'
			ml='4rem'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
		>
			<Heading as='h1' size='2xl' my={0} color='purple.101' fontWeight='normal'>
				Historia
			</Heading>
			<Flex width='100%' justifyContent='flex-start'>
				<Heading as='h2' size='xl' color='purple.101' fontWeight='normal'>
					Experiencia
				</Heading>
			</Flex>
			<Flex width='100%' justifyContent='flex-start'>
				<Heading as='h2' size='xl' color='purple.101' fontWeight='normal'>
					Educación
				</Heading>
			</Flex>
		</Flex>
	);
};
