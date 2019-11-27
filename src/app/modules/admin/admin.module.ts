import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AdminArtistComponent } from './admin-artist/admin-artist.component';
import { AdminSongsComponent } from './admin-songs/admin-songs.component';
import { AdminAlbumsComponent } from './admin-albums/admin-albums.component';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LandingComponent, AdminArtistComponent, AdminSongsComponent, AdminAlbumsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
  ]
})
export class AdminModule { }
