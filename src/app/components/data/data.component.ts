import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  userform: FormGroup;

  user: Object = {
    fullname: {
      name: 'ramon',
      surname: 'morcillo'
    },
    email: 'hellocaramelou@gmail.com',
    hobbies: ['run', 'sleep', 'eat']
  };


  constructor() {

    console.log(this.user);

    this.userform = new FormGroup({
      'fullname': new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'surname': new FormControl('', [Validators.required, this.noSalchipapa])
      })
      ,
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'hobbies': new FormArray([
        new FormControl('run', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.userExists),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    // To set the form values to the user ones
    // this.userform.setValue(this.user);


    this.userform.controls['password2'].setValidators([
      Validators.required,
      // we use the .bind() because in the place the function executes the this does not exist so we have to reference it with the bind
      this.noSame.bind(this.userform)
    ]);


    // To detect form changes
    this.userform.controls['username'].valueChanges
      .subscribe(data => {
        console.log('valueChanges username:', data);
      });

    this.userform.controls['username'].statusChanges
      .subscribe(data => {
        console.log('statusChanges username:', data);
      });
  }

  addHobby() {
    (<FormArray>this.userform.controls['hobbies']).push(
      new FormControl('', Validators.required)

    )
  }

  // to run as a validator that nobody can submit salchipapa as a surname
  noSalchipapa(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'salchipapa') {
      return {
        nosalchipapa: true
      }
    }
    return null;
  }

  // Another custom validator for passwords
  noSame(control: FormControl): { [s: string]: boolean } {
    const userform: any = this;

    if (control.value !== userform.controls['password1'].value) {
      return {
        nosame: true
      }
    }
    return null;
  }

  // Validator for the username to check if it is the same as the one in the database. In this case reymon359
  userExists(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'reymon359') {
          resolve({ exists: true })
        } else {
          resolve(null)
        }
      }, 2000)
    })
    return promise;

  }


  saveChanges() {
    console.log(this.userform.value);
    console.log(this.userform);
    this.userform.reset({ fullname: { name: '', surname: '' }, email: '' });
  }

}
