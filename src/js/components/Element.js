import React from "react";
import TextBox from "./TextBox";

export default class Element extends React.Component{

	render(){
		const elementType = this.props.elem.elementType;
		
		switch (elementType) {
			case "textbox" :{
				return(
				<TextBox title={this.props.elem.elementTitle} id={this.props.elem.elementName}/>
				
				);
				
			}
		}
		
	}
}