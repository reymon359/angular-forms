import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

    userform:FormGroup;

  constructor() {

    this.userform= new FormGroup({
      'name': new FormControl('Ramon'),
      'surname': new FormControl(),
      'email': new FormControl()
    });

  }

saveChanges(){
  console.log(this.userform.value);
  console.log(this.userform);
}

}
