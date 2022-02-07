import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {

  constructor() { }
  @Input() countryInfo = {};

  ngOnInit() {
  }

}
