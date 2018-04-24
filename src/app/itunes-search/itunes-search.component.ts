import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

@Component({
  selector: 'app-itunes-search',
  templateUrl: './itunes-search.component.html',
  styleUrls: ['./itunes-search.component.css']
})
export class ItunesSearchComponent implements OnInit {
	loading:Boolean = false;
	apiRoot:string = 'https://swapi.co/api/people';
	data:any;

	getMusic(searchString:string){
		this.loading = true;
		let apiURL = `${this.apiRoot}?term=${searchString}$limit=1`;
		this.http.get(apiURL)
		.toPromise()
		.then(res => {
			this.data = res.json().results;
			this.loading = false;
		}, err => {
			console.log(err);
		})
		console.log(this.data);
	}

  	constructor(private http:Http) { }

 	 ngOnInit() {
 	 }

}

