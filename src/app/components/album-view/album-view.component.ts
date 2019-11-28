import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from 'src/app/Models/Song';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {
displayedColumns:String[];
dataSource:any;
favs:String[] = [];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http:HttpClient,private route:ActivatedRoute,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    var alid = this.route.snapshot.paramMap.get('alid');
    this.displayedColumns = ['sname','genre','prod','fav'];
    this.http.get<Song[]>('http://localhost:5000/getsongAlbum/'+alid).subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
  });
  this.afAuth.user.subscribe(user=>{
    this.http.get<String[]>('http://127.0.0.1:5000/getFavs/'+user.email).subscribe(data=>{
      this.favs = data
      console.log(this.favs)
    })
    
  })

}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
addFav(sid)
{
  this.afAuth.user.subscribe(user=>{
    this.favs.forEach(i=>{
      if(i==sid)
        window.alert("Song Already Present in Favourites");
    })
    this.http.get('http://127.0.0.1:5000/addFav/'+user.email+'/'+sid,{observe:'response'}).subscribe(response=>{
      window.alert("Added to Favorites");
    })
  })
}
}
