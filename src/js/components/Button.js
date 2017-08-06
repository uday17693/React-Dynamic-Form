import React from "react";

export default class Button extends React.Component{

	
	render(){
		return(
				<div class="container">
					<button type="button" onClick={this.props.handleBackButton} class="btn btn-primary pull-right btn-large">{this.props.btnName}</button>
				</div>
			);
	}
}