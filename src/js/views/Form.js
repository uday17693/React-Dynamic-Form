import React from "react";
import $ from "jquery";
import Header from "../components/Header";
import FormStore from "../Store/FormStore";
import dispatcher from "../dispatcher/dispatcher"

export default class ControllerView extends React.Component{

	render(){
		this.getForm();
		return (
			<div>
				<Header/>
				{this.props.children}
			</div>
			);
		
	}

	getForm(){
		$.ajax({
				url: "http://localhost:3000/form",
				success: function (data){
						dispatcher.dispatch({type: "UPDATE_FORM", text: {label : "form", value : data}});							
					}
			});		
	}


} 