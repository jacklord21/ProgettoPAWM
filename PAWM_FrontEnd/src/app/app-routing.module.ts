import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registrazione',
    loadChildren: () => import('./registrazione/registrazione.module').then( m => m.RegistrazionePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'prenotazioni',
    loadChildren: () => import('./prenotazioni/prenotazioni.module').then( m => m.PrenotazioniPageModule)
  },
  {
<<<<<<< HEAD
    path: 'storico',
    loadChildren: () => import('./storico/storico.module').then( m => m.StoricoPageModule)
  },
  {
    path: 'edit-utente',
    loadChildren: () => import('./edit-utente/edit-utente.module').then( m => m.EditUtentePageModule)
  },
=======
    path: 'eventi',
    loadChildren: () => import('./eventi/eventi.module').then( m => m.EventiPageModule)
  },

>>>>>>> b80ae4ecfbace377a889edc986f399525dfa92cf
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
