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

  utente: Utente;

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private utenteService: UtenteService
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().then(
    res => {
      if(res==undefined || res==null)
        this.router.navigateByUrl('login').then(() => {});
      else {
        this.utenteService.login(res.email).subscribe( ris => {this.utente = ris} )
    //    this.visible = true;
      }
    }
  )
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
