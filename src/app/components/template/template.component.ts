import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  user: Object = {
    name: "Ramon",
    surname: "Morcillo",
    mail: ""
  }

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log('Form posted');
    console.log(form)
  }
}
