import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Form from "./views/Form";
import ControllerView from "./views/ControllerView";
import Block from "./components/Block"


const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Form}>
			<IndexRoute component={ControllerView}></IndexRoute>
			<Route path="Block" component={Block}/>
		</Route>
	</Router>,
	app);