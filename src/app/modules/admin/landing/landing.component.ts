import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth,private router:Router) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user=>{
      if(!user)
        this.router.navigateByUrl('/login')
      if(user.email!="albumadmin@gmail.com")
        this.router.navigateByUrl('/login')
    })

  }

}
