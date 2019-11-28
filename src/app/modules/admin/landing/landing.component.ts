import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [ routerTransition ]
})
export class LandingComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth,private router:Router) { }
  navLinks=[
    {label:"Artist",path:"/admin/artist"},
    {label:"Album",path:"/admin/albums"},
    {label:"Songs",path:"/admin/songs"},
  ]
  ngOnInit() {
    this.afAuth.user.subscribe(user=>{
      if(!user)
        this.router.navigateByUrl('/login')
      if(user.email!="albumadmin@gmail.com")
        this.router.navigateByUrl('/login')
    })

  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
