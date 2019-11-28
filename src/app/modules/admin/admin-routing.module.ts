import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminSongsComponent } from './admin-songs/admin-songs.component';
import { AdminAlbumsComponent } from './admin-albums/admin-albums.component';
import { AdminArtistComponent } from './admin-artist/admin-artist.component';


const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"",redirectTo:"artist",pathMatch:"full"},
    {path:"albums",component:AdminAlbumsComponent,data: { state: 2}},
    {path:"songs",component:AdminSongsComponent,data: { state: 3}},
    {path:"artist",component:AdminArtistComponent,data: { state: 1}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
