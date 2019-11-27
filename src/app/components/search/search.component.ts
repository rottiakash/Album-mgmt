import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Song } from 'src/app/Models/Song';
import { Artist } from 'src/app/Models/Artist';
import { Album } from 'src/app/Models/Album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
option:any;
song = false;
artist = false;
album = false;
search:any;
dataSource : any;
displayedColumns: string[];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }


submit()
{
  if(this.option==1){
    this.displayedColumns = ['sname','alname','genre','prod'];
    this.http.get<Song[]>('http://127.0.0.1:5000/getsongsearch/'+this.search).subscribe(data=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    })
    this.album = false;
    this.artist = false;
    this.song = true;
  }
  if(this.option==2){
    this.displayedColumns = ['aname','country','ncopies'];
    this.http.get<Artist[]>('http://127.0.0.1:5000/getartistsearch/'+this.search).subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.song = false;
    this.album = false;
    this.artist = true;
  }
  if(this.option==3){
    this.displayedColumns = ['aname','arname','rlabel','nstreams'];
    this.http.get<Album[]>('http://127.0.0.1:5000/getalbumsearch/'+this.search).subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    })
    this.song = false;
    this.artist = false;
    this.album = true;
  }
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
selectArtist(row)
{
  this.router.navigateByUrl('/artist/'+row.aid)
}
selectAlbum(row)
{
  this.router.navigateByUrl('/album/'+row.alid)
}
}
