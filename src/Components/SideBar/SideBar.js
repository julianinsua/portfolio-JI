import React, { useEffect } from "react";
import { Flex, Icon } from "@chakra-ui/core";
import { Dali } from "../../Icons/Dali";
import { Pagoda } from "../../Icons/Pagoda";
import { Vitrubian } from "../../Icons/Vitrubian";
import { Tricotta } from "../../Icons/Tricotta";
import { Zen } from "../../Icons/Zen";

export const SideBar = (props) => {
	let sidebar = null;
	if (props.show) {
		sidebar = (
			<Flex
				width='4rem'
				bg='purple.901'
				direction='column'
				height='100vh'
				position='sticky'
				top={0}
				left={0}
				position='fixed'
				zIndex={1000}
				justify='space-between'
			>
				<Flex direction='column'>
					<Pagoda />
					<Vitrubian />
					<Dali />
					<Tricotta />
				</Flex>
				<Zen />
			</Flex>
		);
	}
	return <Flex>{sidebar}</Flex>;
};
