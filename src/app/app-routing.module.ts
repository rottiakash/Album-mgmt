import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';
import { AlbumViewComponent } from './components/album-view/album-view.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"search",component:SearchComponent},
  {path:"artist/:aid",component:ArtistViewComponent},
  {path:"album/:alid",component:AlbumViewComponent},
  {path:"login",component:LoginComponent},
  {path:"admin", loadChildren:"./modules/admin/admin.module#AdminModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
