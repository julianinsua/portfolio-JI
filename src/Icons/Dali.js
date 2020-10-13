import { Flex } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-scroll";

export const Dali = () => {
	return (
		<Flex height='48px' my='0.5rem'>
			<Link
				activeClass='active'
				to='history'
				spy={true}
				smooth={true}
				duration={500}
			>
				<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEfElEQVRoge2ZXYhUZRjHf8+Zsy3ajmSFkOYiEdRFXxBUJEFYkSLeWLsulKar7ZborLOODirVuYjAbCdbC3Fwx81WshU2DEnKi4Iuoi5SvKiUMhqpvXHdQq1lZ895ulgVdec9n1NduL/L83z9//O+c+Y9c2CSSa5vpBZNCk2FKe40e54ojwIPgs4BZgDTLs74E2QIvLLAcVXrW+pGj+SKuTNJZycy0LWq+xH1dDWwGLgxYrkLfKlQvNA4POA4zlgcDbEMFJbvuNezdBvo03Hqq3ASSzbldmcGohZGMuA4jpUuT9+i8ApQF3VYIKoDKdWV2d7sH2FLQhtw2nZNbaiM7EdYFE9daE6qZc3fsHvtL2GSQxkoNBWmeA32p4g+nkxbWOQ0Yj2W61nza1CmFZSgqHjpVO9/Jx5AZ6PuQadt19SgzEADhZU72oBmQ/iQizXLxZol8HFUmQHc3+COvB6U5LuFti3dOUPqRn8C0tXiKdubmS1mBwH6m/pT5fRgH9ASR60BF5X7cnsy35sS/FegbjSPQTyAjujl+uYDze75xuGlwP4YQk2kBN3il2A04LTtmirQ6lfspazu/qb+1OUaxxk73zi8FJGPomutjgrPvLHs3VtMcaOB9NjfC4CbfLuLLC6nB/smmJh99nmgP4beatTX22MLTUGjAU95KuSAlnJ6sM9xHPvShYsr8Rw1MqGI8Q5oNCAiD0SY0dJw+uYJJnKljiUp25uJkgdGI/S7lntMAaMBhTsijVBdcq0JgGwxO5jb0/Gmirwaqd/VWuaYYuYVGD8KR5ykSxrK0/dVC3kqH0TuF0KL321UY85r3rqq+/YJzWzPrpYcBhk/elfFz8BQ3IG2qy9MvCbL4vZTOGuK+RjQ47EHCs7Ei/pa3H74fJhmAyKfJRhYbbsk2UKnTDGjgdFKqg84F3doLVHVr0wxo4HNe9cMKfFvfbXEU/3CFPM9zG0oZbar0Fd7SeER5LuNvdljpnjg88AFd9qLkOj7kAiFgl880IDTu2Ikbdcv+l9WQjh2vvHsh34pgQYA2ovtlVxPZpmg3bVRFg5PJe84jueXE8oAgCDaWepYh/B2cmmhJn69sZT5PCgrtAEYN7G+J7Me5JP4wsKhIY/ikQzAuAkXeRkY8cu78jzUtaJrdtQ5KRk7FE5PTN5qfWcn8JI5Qw+7ltVmuxXxxC4KzI/Q/kSu1HF3mMTIK3AJESkGZCxIeXpaxS5HFA/QGzYxtoH1PZmjwNG49T4MuYy8FzY5tgEAQWp+WxWRLflSPvQZLJGBBrt+nyjlJD2uRg939qwN2JpXk8hAe7G9oiKbk/S4glNaqV8uSKQnwcSvmBSVrtbuI8ATCdoMuejcfGndiaiFiVYAxn8XsCst+Dx0BPC753lPxhEPNTAAkCvmzuBZCxF+jlj6jTXmPuR3XA6iJgYAcr1rfxytpB5GeR+ffxEucgEl33jutrmdezt/SzK3Jq9Zr2Vr6/a7bJVnVXSeqNyJcKvCXyL8oKoHK/U3lDbtXD38b8yeZJLrjX8Andx5vS2bzD0AAAAASUVORK5CYII='></img>
			</Link>
		</Flex>
	);
};
