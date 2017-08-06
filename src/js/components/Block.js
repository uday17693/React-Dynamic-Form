import React from "react";
import Element from "./Element";
import Panel from "./Panel";

export default class Block extends React.Component{

	render(){

		const elems = this.props.elements;
		const elements = elems.map((elem) => {
				return <Element elem={elem} behaviour={this.props.behaviour}/>
			});

		return(
			<div>
				<Panel title={this.props.title}/>
				{elements}
			</div>
			
			);
	}

} 