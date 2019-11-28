import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,private router:Router) { }
  show = false;
  name:String;
  admin = false;
  ngOnInit() {
    this.afAuth.user.subscribe(data=>{
      if(data==null)
        this.show = true;
      if(data.email=="albumadmin@gmail.com")
        this.admin = true
    })
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.show = false;
    this.router.navigateByUrl('/home');
  }

}
