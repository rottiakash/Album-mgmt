import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from 'src/app/Models/Song';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {
displayedColumns:String[];
dataSource:any;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    var alid = this.route.snapshot.paramMap.get('alid');
    this.displayedColumns = ['sname','genre','prod'];
    this.http.get<Song[]>('http://localhost:5000/getsongAlbum/'+alid).subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
  });

}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
