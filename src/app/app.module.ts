import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SearchComponent } from './components/search/search.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http'; 
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule } from '@angular/material';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';
import { AlbumViewComponent } from './components/album-view/album-view.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistViewComponent,
    AlbumViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
