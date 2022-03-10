import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  

  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Email richiesta.' 
      },
      { 
        type: 'pattern', 
        message: 'Email non valida.' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Password richiesta.' 
      },
      { 
        type: 'minlength', 
        message: 'La Password deve contenere almeno 6 caratteri.' 
      }
    ]
  };

  constructor(
    public menuCtrl: MenuController,
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder
  ) { 
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  login(value) {
    this.ionicAuthService.signinUser(value)
      .then(
        (response) => {
        this.router.navigateByUrl('prenotazioni');
      }, error => { }
      )
  }

  goToRegistrazione() {
    this.router.navigateByUrl('registrazione');
  }

  resetPassword(email: string){
    this.ionicAuthService.PasswordRecover(email);
  }

}