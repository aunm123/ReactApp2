import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import Repores from './components/pages/Reopres'
import MainPage from './components/MainPage'
import About from './components/pages/About'
import Home from './components/pages/Home'

import Repo from './components/pages/Repo'
import './styles/index.css';
import {Router,Route,hashHistory,IndexRoute,} from 'react-router'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={MainPage} >
			<IndexRoute component={Home}/>
			<Route path='/repos' component={Repores} />
			<Route path="/repos/:userName/:repoName" component={Repo}/>
			<Route path="/about" component={About} />
		</Route>
	</Router>,
  document.getElementById('content')
);
