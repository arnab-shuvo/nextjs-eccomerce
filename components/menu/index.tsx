import React from 'react';
import { MenuList } from './styled';
import Link from 'next/link';

const Menu: React.FC = () => {
	return (
		<MenuList>
			<Link href={`/`}>
				<li>Home</li>
			</Link>

			<li>Products</li>

			<li>Categories</li>
		</MenuList>
	);
};

export default Menu;
