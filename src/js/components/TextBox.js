import React from "React";
import FormStore from "../Store/FormStore";
import dispatcher from "../dispatcher/dispatcher";

export default class TextBox extends React.Component{

	
	render(){
		const value = FormStore.formData[this.props.id];
		return(
				<div class="form-group form-horizontal container">
					<label class="control-label col-sm-2">{this.props.title}</label>
					<div class="col-sm-10">          
						<input value={value} onChange={this.updateFormStore.bind(this)} class="form-control"/>
					</div>
				</div>			
			);
	}

	updateFormStore(e){
		console.log(e.target.value);
		dispatcher.dispatch({type: "UPDATE_FORM_DATA", text: {label : this.props.id, value : e.target.value}});
	}


}