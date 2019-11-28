import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Song } from 'src/app/Models/Song';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  dataSource:any;
  displayedColumns = ['sname','genre','prod','fav'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http:HttpClient,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user=>{
      this.http.get<Song[]>('http://127.0.0.1:5000/getsongsFav/'+user.email).subscribe(data=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    })
    })
    
  }

  delFav(sid)
  {
    this.afAuth.user.subscribe(user=>
      {
        this.http.get('http://127.0.0.1:5000/delFav/'+user.email+"/"+sid,{observe:'response'}).subscribe(response=>{
          window.alert("Song removed from favourites");
          this.http.get<Song[]>('http://127.0.0.1:5000/getsongsFav/'+user.email).subscribe(data=>{
            console.log(data);
            this.dataSource = new MatTableDataSource(data);
            console.log(this.dataSource)
            this.dataSource.paginator = this.paginator;
          })
        })
      })
  }

}
