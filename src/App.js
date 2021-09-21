import React from 'react';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Summary from './component/Summary';
import GlobalStateProvider from './store/GlobalStateProvider';
import Profile from './component/Header/Profile/Profile';
export default function App()
{
	return (
		<div>
			<GlobalStateProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route path="/" component={ Summary } exact />
						<Route path="/order-summary" component={ Summary } exact />
						<Route path="/profile" component={ Profile } />
					</Switch>
				</Router>
			</GlobalStateProvider>
		</div>
	)
}
