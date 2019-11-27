import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Song } from 'src/app/Models/Song';

@Component({
  selector: 'app-admin-songs',
  templateUrl: './admin-songs.component.html',
  styleUrls: ['./admin-songs.component.css']
})
export class AdminSongsComponent implements OnInit {
  dataSource : any;
  displayedColumns: string[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.displayedColumns = ['sname','alname','genre','prod'];
    this.http.get<Song[]>('http://127.0.0.1:5000/getSongs').subscribe(data=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    })

}
}
