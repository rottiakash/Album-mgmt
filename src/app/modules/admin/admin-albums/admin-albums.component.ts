import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/app/Models/Album';

@Component({
  selector: 'app-admin-albums',
  templateUrl: './admin-albums.component.html',
  styleUrls: ['./admin-albums.component.css']
})
export class AdminAlbumsComponent implements OnInit {
  dataSource : any;
  displayedColumns: string[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.displayedColumns = ['aname','arname','rlabel','nstreams'];
    this.http.get<Album[]>('http://127.0.0.1:5000/getAlbums').subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
