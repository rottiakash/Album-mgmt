import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:any;
  pass:any;
  constructor(private afAuth:AngularFireAuth,private router:Router) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user=>
      {
        if(user.email=="albumadmin@gmail.com")
        this.router.navigateByUrl('/admin')
      })
  }
  alogin()
  {
    console.log(this.uname);
    console.log(this.pass);
    this.afAuth.auth.signInWithEmailAndPassword(this.uname,this.pass).catch(e=> window.alert(e))
    this.afAuth.auth.onAuthStateChanged(user=>
      {
        if(user.email=="albumadmin@gmail.com")
          this.router.navigateByUrl('/admin')
      })
  }
}
