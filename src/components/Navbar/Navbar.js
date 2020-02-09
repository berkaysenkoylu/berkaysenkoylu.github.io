import React from 'react';

import classes from './Navbar.module.scss';
import NavLink from './NavLink/NavLink';

const Navbar = () => {
	let links = [
		{
			to: '/',
			name: 'Home',
			icon: 'home3'
		},
		{
			to: '/projects',
			name: 'Projects',
			icon: 'briefcase'
		},
		{
			to: '/contact',
			name: 'Contact',
			icon: 'envelop'
		}
	];

	return (
		<nav className={classes.Navbar}>
			{links.map((link, index) => {
				return <NavLink
					key={index}
					number={index}
					to={link.to}
					linkName={link.name}
					icon={link.icon}
				/>
			})}
		</nav>
	)
}

export default Navbar;