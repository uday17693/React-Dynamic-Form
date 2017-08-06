import React from "react";

export default class SummaryField extends React.Component{

	render(){
		const style = {"padding-left": "40" + "px"};
		return(
				<div class="container">
					<div class="form-group">
						<label>{this.props.title}</label>
					</div>
					<div class="form-group">
						<span>{this.props.value}</span>
					</div>
				</div>
			);
	}
}