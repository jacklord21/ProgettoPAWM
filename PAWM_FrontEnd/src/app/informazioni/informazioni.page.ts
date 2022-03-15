import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  selector: 'app-informazioni',
  templateUrl: './informazioni.page.html',
  styleUrls: ['./informazioni.page.scss'],
})
export class InformazioniPage implements OnInit {

  constructor(
    private ionicAuthService: IonicAuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().then(
      res => {
        if (res == undefined || res == null)
          this.router.navigateByUrl('login').then(() => { });
        else { }
      }
    )
  }

  sendEmail(email: string){
    window.location.href = "mailto:"+email;
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

  goToStorico() {
    this.router.navigateByUrl('storico');
  }

  goToEditUtente() {
    this.router.navigateByUrl('edit-utente');
  }

  goToEventi() {
    this.router.navigateByUrl('eventi');
  }

  goToPrenotazioni() {
    this.router.navigateByUrl('prenotazioni');
  }

}
