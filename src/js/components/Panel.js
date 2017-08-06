import React from "react";

export default class Panel extends React.Component{

	render(){

		return(
				<div class="container">
					<div class="panel panel-default">
						<div class="panel-body">{this.props.title}</div>
					</div>
				</div>
			);
	}
}