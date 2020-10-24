import { Component, OnInit } from "@angular/core";
import { BeerService } from "../../services/beer.service";

import { Beer } from "../../models/Beer";

@Component({
  selector: "app-beers",
  templateUrl: "./beers.component.html",
  styleUrls: ["./beers.component.css"],
})
export class BeersComponent implements OnInit {
  beers: Beer[];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.getBeers().subscribe((beers) => {
      this.beers = beers;
    });
  }
}
