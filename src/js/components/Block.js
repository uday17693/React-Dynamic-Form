import React from "react";
import Element from "./Element";
import Panel from "./Panel";

export default class Block extends React.Component{

	render(){

		const elems = this.props.elements;
		const elements = elems.map((elem) => {
				return <Element elem={elem}/>
			});

		return(
			<div>
				<Panel title={this.props.title}/>
				{elements}
			</div>
			
			);
	}

} 