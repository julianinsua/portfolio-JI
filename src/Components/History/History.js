import {
	Box,
	Flex,
	Heading,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Text,
} from "@chakra-ui/core";
import React, { useState } from "react";
import { ReactIcon } from "../../Icons/Skills/ReactIcon";
import { SkillSlider } from "./SkillSlider/SkillSlider";
import { JSIcon } from "../../Icons/Skills/JSIcon";
import { Html5Icon } from "../../Icons/Skills/Html5Icon";

export const History = () => {
	const [showExp, setShowExp] = useState(true);

	const clicked = () => {
		setShowExp(!showExp);
	};

	const describeExp = (
		<Flex
			bg='purple.901'
			flexDirection='column'
			width='40rem'
			height='8rem'
			borderRadius='2rem'
			px='1rem'
			justifyContent='center'
		>
			<Heading as='h3' size='md' color='purple.101' m='0.5rem'>
				NL Eats
			</Heading>
			<Text color='purple.101' fontFamily='PT Mono' m='0.5rem'>
				I am a volunteer frontend developer using react and chakra UI. The app
				we devolop conects foodbanks with people in need. Allso allows foodbanks
				to manage donations and stock.
			</Text>
		</Flex>
	);

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
			{/* <Heading
				as='h1'
				size='2xl'
				my='4rem'
				color='purple.101'
				fontWeight='normal'
				ml='2rem'
			>
				Historia
			</Heading> */}

			<Flex justifyContent='space-between' flexDirection='row'>
				<Flex flexDirection='column' alignItems='flex-start'>
					<Heading
						as='h2'
						size='xl'
						color='purple.101'
						fontWeight='normal'
						ml='2rem'
					>
						Experiencia
					</Heading>
					<Flex flexDirection='column' width='40rem' height='30rem' ml='2rem'>
						<Flex
							width='8rem'
							height='8rem'
							borderRadius='2rem'
							bg='purple.101'
							mx='4rem'
							my='2rem'
							onClick={clicked}
						>
							<img src='/img/logo-nleats.svg' />
						</Flex>
						{showExp && describeExp}
					</Flex>
				</Flex>
				<Flex justifyContent='flex-start' flexDirection='column'>
					<Heading
						as='h2'
						size='xl'
						color='purple.101'
						fontWeight='normal'
						ml='2rem'
					>
						Skills
					</Heading>
					<Flex flexWrap='no-wrap' flexDirection='column'>
						<SkillSlider value={65} icon={<ReactIcon />} label='React' />
						<SkillSlider value={70} icon={<JSIcon />} label='JavaScript' />
						<SkillSlider value={80} icon={<Html5Icon />} label='HTML 5' />
						<SkillSlider
							value={55}
							icon={<img src='/img/CSS-3.svg' />}
							label='CSS 3'
						/>
						<SkillSlider
							value={40}
							icon={<img src='/img/Sass.svg' />}
							label='Sass'
						/>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
