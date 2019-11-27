import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Song } from 'src/app/Models/Song';
import { Artist } from 'src/app/Models/Artist';
import { Album } from 'src/app/Models/Album';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css']
})
export class ArtistViewComponent implements OnInit {
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['aname','rlabel','nstreams'];

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    var aid = this.route.snapshot.paramMap.get('aid')
    this.http.get<Album[]>('http://127.0.0.1:5000/getalbumArtist/'+aid).subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  selectRow(row)
  {
    this.router.navigateByUrl('/album/'+row.alid);
  }

}
