import { Flex } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-scroll";

export const Pagoda = () => {
	return (
		<Flex height='48px' my='0.5rem'>
			<Link
				activeClass='active'
				to='home'
				spy={true}
				smooth={true}
				duration={500}
			>
				<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC90lEQVRoge2XTYhNYRjHf887x8g3I6SkKBsUSZFkQeQjJQsLNmauz5ncmXu7ykdys0DNuObeyWiGO2RhYyMlHwsLUiwmlI+FoqYkG6J8zJhzHosh02XmnDPnnIucX53Fec/zPs/zP+/7nOe8EBPzfyNROT6xNb9WDW19d2ZHpmPPtSjimCicAnxPflrfpW1RxYlEQGFLYSww/ueIVhWqC5OiiBW6gFxNy8Ke4XQCo/sNj+oR53EukV8ddrzQaiCXyFU5ah0ATQLDBjBzBM5Jr304fSH9Koy4gQU0bmuZgToJUWqBCR6DflIomgq7LX0m/SRIfN8CCtWFSd0V9hxxzGJgHbCEYFuxE9GrquaOZdlPUu2p134mexbQlGiuReUIMNF3iv54i+ihTLGh1YuxrxVoqmlZA04emDWk1Nx5boRkulh/3esE31som81aY7rGb1ZkK7AAGOfXRwnvQTsROT/9w9SLmy5tsgP6iykrgT+jTTV57X+f6agf1Kdfezci+xcqF1bYDkvfcNQMafmaqguz1bBeHN2AsDhQBso9NXLZEvtK6mzqmd/prgKatzVP6XHMPKM6H3QRwlKQyUPL1pU3qN4Fue+IPKw0zqOGsw1vBpvguoVsh30GbeiTGtn55wdTENkIbDQotkMzkBpsQoWbx5sPrt9YuWDtF4FlXuxDokdFDmY66g+5GXp+pSdrTs7sxdQJrAJmAKOCZPgbPgIvFW5aOKdSHakXIfuPiQTfVRl2Jw3qL+7E5e68pXherlwiV2VjbRfV41EmpCL7eiut9v2na995sf+tgOyOtpEjnO6qYapzHWU+6DKQFUBlqNkOTDfoLZDbRnj4VeTxZzP8bbZ956dSw18ENCbyraLsLk+e/lDh9N5ifW3/sV+KOFNM1olyDPibjnY2yNFMMVlX+mDAGmhM5OeKskthucB0wu+8bnxU6BK4hUpr5lzyaZnjx3jC9TMa9MxbSthn5n++E8cC/jS+a6DcxDXwt/PPC4iJ+d/5BjDg8wDYpVh9AAAAAElFTkSuQmCC'></img>
			</Link>
		</Flex>
	);
};
