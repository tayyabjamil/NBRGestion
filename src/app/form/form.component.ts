import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('form')
  }

}
