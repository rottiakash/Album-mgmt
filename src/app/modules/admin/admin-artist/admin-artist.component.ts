import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Artist } from 'src/app/Models/Artist';
import { CountryPickerService, ICountry } from 'ngx-country-picker';
import { Country } from 'src/app/Models/Country';

@Component({
  selector: 'app-admin-artist',
  templateUrl: './admin-artist.component.html',
  styleUrls: ['./admin-artist.component.css']
})
export class AdminArtistComponent implements OnInit {
  aname:any;
  copies:any;
  ctry:any = "default";
  show = false;
  dataSource : any;
  clist: String[] = [];
displayedColumns: string[];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  countries: ICountry[];
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.displayedColumns = ['aname','country','ncopies','del'];
    this.http.get<Artist[]>('http://127.0.0.1:5000/getArtists').subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.http.get<Country[]>('https://restcountries.eu/rest/v2/all?fields=name').subscribe(data=>
    {
      data.forEach(i=>this.clist.push(i.name))
    })
    
  }
  submit(){
    console.log(this.aname);
    console.log(this.copies);
    console.log(this.ctry);

    this.http.get("http://127.0.0.1:5000/insertArtist/"+this.aname+"/"+this.ctry+"/"+this.copies, {observe:'response'}).subscribe(response=>{
      window.alert("Artist Added Successfully");
      this.router.navigateByUrl('/admin/artist')
      this.show = false;
    })
  }

  delete(artist)
  {
    console.log(artist.name);
    this.http.get("http://127.0.0.1:5000/deleteArtist/"+artist.aid,{observe : 'response'}).subscribe(response=>{
      window.alert(artist.name+" Deleted Successfully")
    })
  }

}
