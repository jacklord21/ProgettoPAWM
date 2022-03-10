import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IonicAuthService } from '../ionic-auth.service';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';

  error_msg = {
    'nome': [
      { 
        type: 'required', 
        message: 'Nome richiesto.' 
      }
    ],
    'cognome': [
      { 
        type: 'required', 
        message: 'Cognome richiesto.' 
      },
    ],
    'dataNascita': [
      { 
        type: 'required', 
        message: 'Data Nascita richiesta.' 
      }
    ],
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
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder,
    private utenteService: UtenteService
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      nome: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cognome: new FormControl('', Validators.compose([
        Validators.required
      ])),
      dataNascita: new FormControl('', Validators.compose([
        Validators.required
      ])),
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

  registrazione(value) {
    this.ionicAuthService.createUser(value)
      .then(
        () => {
        this.utenteService.registra(this.createUtente(value));
        this.goToLogin();
        },
        (error) => {}
      )
  }

  private createUtente(value) : Utente { 
   //const utente = new Utente(value.nome, value.cognome, value.dataNascita, value.email);
   return value;
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }


}
