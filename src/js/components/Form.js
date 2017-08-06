import React from "react";
import TextBox from "./TextBox";
import {Link} from "react-router";
import dispatcher from "../dispatcher/dispatcher";

export default class Form extends React.Component{

	constructor(){
		super();
		this.state = {name: "uday"};
	}
	
	changeState(e){
		this.setState({name : e.target.value});
	}

	render(){
		return(
			<div>
				<TextBox label="Name"/>
				<TextBox label="Date of birth"/>
				<TextBox label="Employee Id"/>				
				<TextBox label="Mail"/>
				<TextBox label="Phone"/>				
			</div>
			);

	}
}
