import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
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
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().then(
      res => {
        if (res == undefined || res == null)
          this.router.navigateByUrl('login').then(() => { });
        else {
          this.utenteService.login(res.email).subscribe(user => {
            this.utente = user;
          })
        }
      }
    )
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
    this.ionicAuthService.aggiornamentoDati(value);
    this.router.navigateByUrl('login');
  }

  cancellaAccount(){
    this.alertController.create({
      header: 'Conferma cancellazione',
      message: 'Sei sicuro di voler cancellare l\'account?',
      buttons: [
        {
          text: 'Annulla',
          handler: () => {
          }
        },
        {
          text: 'Conferma',
          handler: () => {
            this.ionicAuthService.eliminaAccount();
            this.utenteService.eliminaAccount(this.utente);
            this.router.navigateByUrl('login');
          }
        }
      ]
    }).then(res => {
      res.present();
    });
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

  goToEventi(){
    this.router.navigateByUrl('eventi');
  }

  goToInformazioni(){
    this.router.navigateByUrl('informazioni');
  }
  
}
