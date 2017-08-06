import React from "react";
import $ from "jquery";
import Step from "../components/Step";
import Button from "../components/Button";
import FormStore from "../Store/FormStore";
import { Link } from "react-router";

export default class ControllerView extends React.Component{

	constructor(){
		super();	
		this.state={stepno:0};
		this.ChangeStep = this.ChangeStep.bind(this);
		this.setStep= this.setStep.bind(this);
	}

	setStep(){
		if(this.state.stepno==0){
				this.setState({
					stepno : 1,
					step: FormStore.forms.form.Steps[0]
				});
			}else{
				this.setState({
					stepno : this.state.stepno,
					step: FormStore.forms.form.Steps[this.state.stepno-1]
				});
			}
	}

	componentWillMount(){
		FormStore.on("change", this.setStep);
	}

	componentWillUnmount(){
		FormStore.removeListener("change", this.setStep);
	}

	ChangeStep(e){
		const num = e.target.getAttribute("data-stepno");
		this.setState({
			stepno : num,
			step: FormStore.forms.form.Steps[num-1]
		});
	}

	render(){	
		if(this.state.stepno!=0){
			const listofsteps = FormStore.forms.form.Steps;
			var activeclass = "";
			const navigationlist = listofsteps.map((step) => {
				activeclass = step.stepNo==this.state.stepno ? "active" : "";
				return <li class={activeclass} ><a data-stepno={step.stepNo} onClick={this.ChangeStep}>{step.stepName}</a></li>
			});
			return(
					<div>
						<div class="container">
							<ul class="nav nav-tabs well">
								{navigationlist}
							</ul>
						</div>
						<Step step={this.state.step} behaviour="form"/>
						<Link to="Summary"><Button btnName="Summary"/></Link>
					</div>
				);
		}else{
			return false;	
		}		
	}	
} 