import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';
import { IonicAuthService } from '../ionic-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.page.html',
  styleUrls: ['./eventi.page.scss'],
})
export class EventiPage implements OnInit {

  clicked: number
  visible: boolean = false
  eventi: Evento[] = []

  constructor(
    private eventoService : EventoService, 
    private ionicService : IonicAuthService,
    private router: Router) {
  }

  ngOnInit() {
    
    if(this.ionicService.userDetails()==undefined)
      this.router.navigateByUrl('login')


    this.eventoService.getAll().subscribe(ev => {
      this.eventi = ev;
    }) ;
  }

  changeHide() {
    this.visible = !this.visible;
  }

}
