import React from "react";
import Block from "./Block";
import FormStore from "../Store/FormStore";

export default class Step extends React.Component{

	render(){

		const bloc  = this.props.step.Blocks;
		const blocks = bloc.map((bl) => {
				return <Block elements={bl.elements} title={bl.blockTitle}/>
			});
		
		return(
				<div>
					{blocks}
				</div>
			);

	}

} 