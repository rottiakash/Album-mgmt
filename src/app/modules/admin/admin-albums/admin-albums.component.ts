import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/app/Models/Album';
import { Artist } from 'src/app/Models/Artist';

@Component({
  selector: 'app-admin-albums',
  templateUrl: './admin-albums.component.html',
  styleUrls: ['./admin-albums.component.css']
})
export class AdminAlbumsComponent implements OnInit {
  streams:any;
  alname:any;
  alabel:any;
  aid:any = "default";
  dataSource : any;
  show = false;
  artists:Artist[];
  displayedColumns: string[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.displayedColumns = ['aname','arname','rlabel','nstreams','del'];
    this.http.get<Album[]>('http://127.0.0.1:5000/getAlbums').subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    })
    this.http.get<Artist[]>('http://127.0.0.1:5000/getArtists').subscribe(data=>{
      this.artists = data;
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  submit(){
    console.log(this.alname);
    console.log(this.streams);
    console.log(this.alabel);
    console.log(this.aid);

    this.http.get("http://127.0.0.1:5000/insertAlbum/"+this.aid+"/"+this.alname+"/"+this.alabel+"/"+this.streams,{observe:'response'}).subscribe(response=>{
      this.http.get<Album[]>('http://127.0.0.1:5000/getAlbums').subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource)
        this.dataSource.paginator = this.paginator;
      }) ;
    window.alert("Album Added Successfully");
      this.show = false;
      
    })
  }

  delete(album)
  {
    console.log(album.name)
    this.http.get("http://127.0.0.1:5000/deleteAlbum/"+album.alid, {observe:'response'}).subscribe(response=>{
      this.http.get<Album[]>('http://127.0.0.1:5000/getAlbums').subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    });
      window.alert(album.name+" Deleted Successfully")
    })
  }
  
}
