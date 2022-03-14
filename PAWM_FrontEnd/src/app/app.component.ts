import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from './ionic-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  

  constructor(
    private ionicAuthService: IonicAuthService,
    private router: Router,
  ) {}

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
