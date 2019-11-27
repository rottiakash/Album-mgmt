import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminSongsComponent } from './admin-songs/admin-songs.component';
import { AdminAlbumsComponent } from './admin-albums/admin-albums.component';
import { AdminArtistComponent } from './admin-artist/admin-artist.component';


const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"",redirectTo:"albums",pathMatch:"full"},
    {path:"albums",component:AdminAlbumsComponent},
    {path:"songs",component:AdminSongsComponent},
    {path:"artist",component:AdminArtistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
