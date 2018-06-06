import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = 'John';

  // ngOnInit() {

  // }
  // clicked() {
  //   console.log('You clicked !');
  // }
  // submitted(form: NgForm) {
  //   console.log('You submited !');
  //   console.log(form.value);
  // }

  public loginForm: FormGroup;

  constructor (private authent: AuthenticationService, private router: Router) {

    if (this.authent.authenticated) {
      this.authent.disconnect();
      console.log('disconnect');
    }

    this.loginForm = new FormGroup ({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required,  checkPassword]),
    });

  }

  onSubmit() {
    console.log('Submitted !');
  }

  onClicked($event: string): void {
    console.log(this.loginForm.value);
    console.log($event);
    const user = this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password);
    console.log(user);

    if (user) {
      this.router.navigateByUrl('/home');
    }
  }

}

function checkPassword(c: AbstractControl): ValidationErrors | null {
  if (c.value.length < 5 ) {
    return {
      checkPassword: 'Trop court, encore un peu Jack'
    };
  }
  return null;
}


