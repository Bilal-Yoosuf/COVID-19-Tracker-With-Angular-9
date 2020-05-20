import { HttpClient } from '@angular/common/http';
import { CoronaService } from './services/corona.service';
import { Component, Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Covid-Tracker';
  countries: any;
  country:any;
  confirmed:Number;
  active:Number;
  recovered:Number;
  deaths:Number;

  constructor(private corona: CoronaService) {}
  ngOnInit() {
    this.corona.getCountries().subscribe((data) => {
      console.log(data);
      this.countries = data;
      
    });
  }
  getCoronaData() {
    this.corona.getCoronaRealTimeData(this.country).subscribe((data =>{
    console.log(data)
    var index = data.length-1;
    this.confirmed = data[index].Confirmed;
    this.recovered = data[index].Recovered;
    this.deaths = data[index].Deaths;
    this.active =(data[index].Confirmed) - (data[index].Recovered + data[index].Deaths)
    }))
    
  }
  getCountry(country: any) {
    this.country = country
    
    
  }
}
