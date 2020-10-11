import { Flex, Text } from "@chakra-ui/core";
import React from "react";

export const AboutMeText = () => {
	return (
		<Flex
			mx='3rem'
			color='purple.101'
			fontSize='xl'
			direction='column'
			textAlign='justify'
		>
			<Text my='1rem' fontFamily='PT Mono'>
				"Lo mas importante que puedo decir sobre mi mismo es que amo aprender.
				Adquirir un conocimiento nuevo es una de las cosas que mas disfruto. No
				importa de donde venga, ya sea a través de la educación formal o de la
				experiencia practica, la lectura o un curso online.
			</Text>
			<Text my='1rem' fontFamily='PT Mono'>
				Lograr dominar un tema nuevo o profundizar el conocimiento de cualquier
				materia es a la vez un desafío y un placer. Muchas veces me apuro a
				investigar cualquier tema con el que me encuentro y del que siento que
				"no se nada".
			</Text>
			<Text my='1rem' fontFamily='PT Mono'>
				Es este amor por aprender y estudiar que me llevo a elegir mi carrera
				universitaria, la razón por la que soy un lector voraz y por la que rijo
				mi vida laboral. "
			</Text>
		</Flex>
	);
};
