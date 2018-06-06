import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'John';
  constructor() { }

  ngOnInit() {

  }
  clicked() {
    console.log('You clicked !');
  }
  submitted(form: NgForm) {
    console.log('You submited !');
    console.log(form.value);
  }
}
