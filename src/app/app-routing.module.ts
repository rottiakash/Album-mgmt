import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';
import { AlbumViewComponent } from './components/album-view/album-view.component';
import { LoginComponent } from './components/login/login.component';
import { FavComponent } from './components/fav/fav.component';
import { AngularFireAuthGuard,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"search",component:SearchComponent, canActivate: [AngularFireAuthGuard]},
  {path:"artist/:aid",component:ArtistViewComponent, canActivate: [AngularFireAuthGuard]},
  {path:"album/:alid",component:AlbumViewComponent, canActivate: [AngularFireAuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"fav",component:FavComponent, canActivate: [AngularFireAuthGuard]},
  {path:"admin", loadChildren:"./modules/admin/admin.module#AdminModule", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
