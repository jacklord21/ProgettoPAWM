import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class IonicAuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private toastController : ToastController
  ) { }  

  createUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            this.openToast('success', 'Utente creato.', 4000);
            resolve(res);
          },
          err => {
            reject(err);
            if(err.code=='auth/email-already-in-use')
              this.openToast('danger', 'Email non disponibile. Inseriscine un\'altra.', 4000);
          }
        );
    });
  }

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password)
      .then(
        (ris) => resolve(this.openToast('success', 'Login effettuato.', 1000)),
        (err) => {
          reject(err);
          this.switchSignInUserError(err);
            //eccezione per gestione troppi tentativi
        } 
      );
    }
    );
    }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth.signOut()
          .then(() => {
            this.openToast("warning", "Logout effettuato", 3000);
            resolve();
          }).catch(() => {
            reject();
          });
      }
    })
  }

  eliminaAccount(){
    this.userDetails().then(user =>{
      user.delete();
      this.openToast("danger", "Account Eliminato correttamente", 5000);
    })
  }

  aggiornamentoDati(value){
    this.userDetails().then(user => {
      if (value.email != user.email) {
        user.updateEmail(value.email);
      }
      if (value.password != null) {
        user.updatePassword(value.password);
      }
      this.openToast("success", "Dati account aggiornati correttamente; Effettuare nuovamente l'accesso", 5000);
    })
  }

  userDetails() {
    return this.angularFireAuth.currentUser
  }

  PasswordRecover(passwordResetEmail) {
    return this.angularFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      this.openToast("success", "Email per il Reset della Password inviata, controllare la posta.", 4000);
    }).catch((error) => {
      
      if(error.code=='auth/user-not-found'){
        this.openToast("danger", "Utente inesistente", 4000)
      }else{
        window.alert(error.message);
      }
    })
  }

  
  private switchSignInUserError(err: any) {
    if(err.code=='auth/user-not-found')
      this.openToast('danger', 'Utente inesistente.', 4000);
    if(err.code=='auth/wrong-password')
      this.openToast('danger', 'Credenziali errate.', 4000);
    if (err.code=='auth/user-disabled')
      this.openToast('danger', 'Your account has been suspended. Please contact us directly to discuss this.', 4000);
  }

  private async openToast(colore: string, messaggio: string, durata: number) {  
    const toast = await this.toastController.create({  
      color: colore,
      message: messaggio,   
      duration: durata,
    });  
    toast.present();  
  }  

}