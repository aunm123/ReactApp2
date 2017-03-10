'use strict';
import React, {Component} from 'react';
import NavLink from './Plugin/NavLink'

class MainPage extends Component {
	render() {
		return (
			<div>
				<h1>React Router Tutorial</h1>
				<ul role="nav">
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/repos">Repos</NavLink></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

export default MainPage;