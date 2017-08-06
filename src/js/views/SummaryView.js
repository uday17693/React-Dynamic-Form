import React from "react";
import $ from "jquery";
import Step from "../components/Step";
import Button from "../components/Button";
import FormStore from "../Store/FormStore";

export default class SummaryView extends React.Component{

	constructor(){
		super();
		this.handleBackButton = this.handleBackButton.bind(this);
	}

	handleBackButton(){
		this.props.history.pushState(null, "/");
	}

	render(){	
			const steps  = FormStore.forms.form.Steps;
			const listOfSteps = steps.map((step) => {
				return <Step step={step} behaviour="summary"/>
			});
			return(
					<div class="container">
						{this.props.children}
						{listOfSteps}
						<Button btnName="Back" handleBackButton={this.handleBackButton}/>
					</div>
				);
			
	}	
} 