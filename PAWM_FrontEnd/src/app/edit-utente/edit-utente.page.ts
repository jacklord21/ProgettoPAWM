import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IonicAuthService } from '../ionic-auth.service';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-edit-utente',
  templateUrl: './edit-utente.page.html',
  styleUrls: ['./edit-utente.page.scss'],
})
export class EditUtentePage implements OnInit {

  private utente: Utente;
  private userForm: FormGroup;
  private successMsg: string = '';
  private errorMsg: string = '';

  private error_msg ={
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
        type: 'minlength',
        message: 'La Password deve contenere almeno 6 caratteri.'
      }
    ]
  };

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private utenteService: UtenteService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().then(user => {
      this.utenteService.login(user.email).subscribe((data: Utente) => {
        this.utente = {
          id: data.id,
          nome: data.nome,
          cognome: data.cognome,
          dataNascita: data.dataNascita,
          email: data.email
        }
      })
    })
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6)
      ])),
    });
  }

  aggiornamentoDati(value) {
    let newUtente: Utente = this.utente;
    newUtente.email = value.email;
    this.utenteService.aggiornaEmail(newUtente);
    console.log("PEPPE Sè CASCATO: "+this.utente.id+"AAAA: "+value.email);
    this.ionicAuthService.aggiornamentoDati(value);
    console.log("Qui ce so riato");
  }

  goToStorico() {
    this.router.navigateByUrl('storico');
  }

  goToPrenotazioni() {
    this.router.navigateByUrl('prenotazioni');
  }

  logOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      })
  }
}
