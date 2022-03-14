import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';
import { IonicAuthService } from '../ionic-auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.page.html',
  styleUrls: ['./eventi.page.scss'],
})
export class EventiPage implements OnInit {

  clicked: number
  eventi: Evento[] = []
  partecipantiForm: FormGroup

  constructor(
    private eventoService : EventoService, 
    private ionicService : IonicAuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController) {
  }

  ngOnInit() {
    
    if(this.ionicService.userDetails()==undefined)
      this.router.navigateByUrl('login')


    this.eventoService.getDisponibili().subscribe(ev => {
      if(ev.length==0) {
        this.openToast('danger', 'Nessun evento disponibile.')
        this.router.navigateByUrl('prenotazioni')
      }
      else this.eventi = ev;
    }) ;
    

    this.partecipantiForm = this.formBuilder.group({
      numPartecipanti: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ]))
    });
  }

  prenota(value) {

    

  }

  async openToast(colore: string, messaggio: string) {  
    const toast = await this.toastController.create({  
      color: colore,
      message: messaggio,   
      duration: 4000  
    });  
    toast.present();  
  } 

}