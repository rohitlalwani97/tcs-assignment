import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const baseUrl = 'https://restcountries.com/v3/region/';
@Injectable({
  providedIn: "root",
})
export class TcsServiceService {
constructor(private http: HttpClient) {}

  getCountry(payload) {
    return this.http.get(`${baseUrl}${payload.region}`);
  }
}
