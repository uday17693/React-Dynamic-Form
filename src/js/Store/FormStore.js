import { EventEmitter } from "events";

import dispatcher from "../dispatcher/dispatcher";

class FormStore extends EventEmitter {
  constructor() {
    super();    
    this.forms = {};
    this.formData = {};
    this.updateForm = this.updateForm.bind(this);
    this.updateFormData = this.updateFormData.bind(this);
  }

  updateForm(object) {    
    this.forms[object.label] =  object.value;    
    this.emit("change");
  }

  updateFormData(object) {    
    this.formData[object.label] =  object.value;   
    console.log(this.formData); 
    this.emit("change");
  }

  getAll() {
    return [this.forms, this.formData];
  }

  handleActions(action) {
    switch(action.type) {
      case "UPDATE_FORM": {
        this.updateForm(action.text);
        break;
      }
      case "UPDATE_FORM_DATA": {
        this.updateFormData(action.text);
        break;
      }      
    }
  }

}

const formStore = new FormStore;
dispatcher.register(formStore.handleActions.bind(formStore));

export default formStore;