import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
/*import UsersList from './users/users.controller.js'*/
/*import Post from './students/Post.js';*/
/*import Student from './students/students.js';*/
import Home from './home/home';
import Documentation from './documentation/Documentation';
import UsersList from './users/users.controller';
 

const App = (props) => {
	
	return (
	<Router>
		<Route path='/' component = {Home}/>
		<Route path='/usersList' component = {UsersList}/>
		<Route path='/documentation' component = {Documentation}/>
			
	</Router>
)};

export default App