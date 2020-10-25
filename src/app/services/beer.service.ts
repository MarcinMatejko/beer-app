import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Beer } from "../models/Beer";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'http://ontariobeerapi.ca/beers/'
    // 'SECRET_KEY': 'not-a-secret',
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Methods': 'GET'
  })
};


@Injectable({
  providedIn: "root",
})
export class BeerService {
  beersUrl: string = "http://ontariobeerapi.ca/beers/";

  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl, httpOptions);
  }
}
