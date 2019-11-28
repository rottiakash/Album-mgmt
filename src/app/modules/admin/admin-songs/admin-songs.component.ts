import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Song } from 'src/app/Models/Song';
import { Album } from 'src/app/Models/Album';

@Component({
  selector: 'app-admin-songs',
  templateUrl: './admin-songs.component.html',
  styleUrls: ['./admin-songs.component.css']
})
export class AdminSongsComponent implements OnInit {
  dataSource : any;
  displayedColumns: string[];
  show = false;
  albums:Album[];
  sname:any;
  mpro:any;
  alid:any = "default";
  genre:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.displayedColumns = ['sname','alname','genre','prod','del'];
    this.http.get<Song[]>('http://127.0.0.1:5000/getSongs').subscribe(data=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    })
    this.http.get<Album[]>('http://127.0.0.1:5000/getAlbums').subscribe(data=>{
        this.albums = data;
    })

  }
  submit(){
    console.log(this.sname);
    console.log(this.mpro);
    console.log(this.alid);
    console.log(this.genre);

    this.http.get("http://127.0.0.1:5000/insertSong/"+this.alid+"/"+this.genre+"/"+this.mpro+"/"+this.sname, {observe:'response'}).subscribe(response=>{
      window.alert("Song Added Successfully");
      this.show = false;
    })
  }

  delete(song)
  {
    console.log(song.name)
    this.http.get("http://127.0.0.1:5000/deleteSong/"+song.sid,{observe:'response'}).subscribe(response=>{
      window.alert(song.name+" Deleted Successfully");
    })
  }

}
