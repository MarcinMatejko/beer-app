import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Beer } from "../models/Beer";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class BeerService {
  beersUrl: string = "http://localhost:4200/beers/";

  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl);
  }
}
