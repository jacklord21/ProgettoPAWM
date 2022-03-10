import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonicAuthService } from '../ionic-auth.service';
import { Utente } from '../utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.page.html',
  styleUrls: ['./prenotazioni.page.scss'],
})
export class PrenotazioniPage implements OnInit {

  private utente: Utente;

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private utenteService: UtenteService
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().then(user =>{
      this.utenteService.login(user.email).subscribe((data: Utente) => this.utente = {
        id: data.id,
        nome: data.nome,
        cognome: data.cognome,
        dataNascita: data.dataNascita,
        email: data.email
      });
    })
    console.log("FIN QUI CE STO");
  }

  prova(){
    console.log('PIPPO '+this.utente.nome);
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
