import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  userform: FormGroup;

  user: Object = {
    fullname: {
      name: "ramon",
      surname: "morcillo"
    },
    email: "hellocaramelou@gmail.com",
    hobbies: ["run", "sleep", "eat"]
  };


  constructor() {

    console.log(this.user);

    this.userform = new FormGroup({
      'fullname': new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'surname': new FormControl('', [Validators.required, this.noSalchipapa])
      })
      ,
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'hobbies': new FormArray([
        new FormControl('run', Validators.required)
      ])
    });

    // To set the form values to the user ones
    // this.userform.setValue(this.user);


  }

  addHobby() {
    (<FormArray>this.userform.controls['hobbies']).push(
      new FormControl('', Validators.required)

    )
  }

  // to run as a validator that nobody can submit salchipapa as a surname
  noSalchipapa(control: FormControl): { [s:string]:boolean } {

    if(control.value === 'salchipapa'){
      return {
        nosalchipapa:true
      }
    }
    return null;
  }


  saveChanges() {
    console.log(this.userform.value);
    console.log(this.userform);
    this.userform.reset({ fullname: { name: "", surname: "" }, email: "" });
  }

}
