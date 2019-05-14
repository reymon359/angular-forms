import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log('Form posted');
    console.log(form)
  }
}
