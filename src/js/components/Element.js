import React from "react";
import TextBox from "./TextBox";
import SummaryField from "./SummaryField";
import FormStore from "../Store/FormStore";

export default class Element extends React.Component{

	render(){
		const elementType = this.props.elem.elementType;

		if(this.props.behaviour=="summary"){
			return (
					<SummaryField title={this.props.elem.elementTitle} value={FormStore.formData[this.props.elem.elementName]}/>
				);

		}else{
			switch (elementType) {
				case "textbox" :{
					return(
					<TextBox title={this.props.elem.elementTitle} id={this.props.elem.elementName}/>
					
					);
					
				}
			}
		}
		
	}
}