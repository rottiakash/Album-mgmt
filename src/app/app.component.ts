import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afAuth:AngularFireAuth,private router:Router){}
  title = 'Album-Mgmt';
  logout()
  {
    this.afAuth.auth.signOut();
    window.location.replace("http://localhost:4200/home");  }
}
