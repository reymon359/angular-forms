import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border:1px solid red;
    }
    `]
})
export class TemplateComponent {


  user: object = {
    name: null,
    surname: null,
    email: null,
    country: "",
    sex: 'man',
    accept:false
  }

  countries = [{
    code: "FR",
    name: "France"
  }, {
    code: "ESP",
    name: "Spain"
  }];

  sexs = ['man', 'woman', 'other'];

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log('Form posted');
    console.log(form)
  }
}
