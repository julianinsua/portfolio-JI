import React, { useEffect, useState } from "react";
import { customTheme } from "./theme";
import {
	ThemeProvider,
	CSSReset,
	Flex,
	Slide,
	useDisclosure,
} from "@chakra-ui/core";
import { HomePage } from "./Components/HomePage/HomePage";
import { SideBar } from "./Components/SideBar/SideBar";
import { AboutMe } from "./Components/AboutMe/AboutMe";

function App() {
	const [showSidebar, setShowSidebar] = useState(true);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [scrollPos, setScrollPos] = useState(0);

	const handleScroll = () => {
		const pos = window.pageYOffset;
		setScrollPos(pos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		if (scrollPos >= 500) {
			onOpen();
		} else if (scrollPos < 500) {
			onClose();
		}
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<ThemeProvider theme={customTheme}>
			<HomePage />
			<Slide placement='left' timeout={500} in={isOpen}>
				{(styles) => (
					<Flex {...styles} zIndex={1000}>
						<SideBar show={showSidebar} />
					</Flex>
				)}
			</Slide>
			<AboutMe />
		</ThemeProvider>
	);
}

export default App;
