import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not (form) {
      border:1px solid red;
    }
    `]
})
export class TemplateComponent {

  user: Object = {
    name: null,
    surname: null,
    email: null
  }

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log('Form posted');
    console.log(form)
  }
}
