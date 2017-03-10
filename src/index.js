import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import Repores from './components/pages/Reopres'
import MainPage from './components/MainPage'
import Repo from './components/pages/Repo'
import './styles/index.css';
import {Router,Route,hashHistory,} from 'react-router'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={MainPage} >
			<Route path='/repos' component={Repores} />
			<Route path="/repos/:userName/:repoName" component={Repo}/>
		</Route>
	</Router>,
  document.getElementById('content')
);
