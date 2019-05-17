import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    email: "hellocaramelou@gmail.com"
  };


  constructor() {

    console.log(this.user);

    this.userform = new FormGroup({
      'fullname': new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'surname': new FormControl('', Validators.required)
      })
      ,
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    });

    this.userform.setValue(this.user);


  }

  saveChanges() {
    console.log(this.userform.value);
    console.log(this.userform);
    this.userform.reset({ fullname: { name: "", surname: "" },  email: "" });
  }

}
