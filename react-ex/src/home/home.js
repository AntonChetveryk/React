import React from 'react';
import {NavLink} from 'react-router-dom';
import './home.css'

const Home = (props) => {
	return (
	<div>
		<nav>
			<ul>
				<li><NavLink to='/'>Main</NavLink></li>
				<li><NavLink to='/UsersList'>Users List</NavLink></li>
				<li><NavLink to='/documentation'>Documentation</NavLink></li>
			</ul>
		</nav>
	</div>
	)
}

export default Home;