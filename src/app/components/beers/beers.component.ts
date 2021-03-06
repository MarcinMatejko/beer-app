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
  uniqueBrewers: String[];
  brewerBeers: Beer[];
  slicedBeers: Beer[];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.getBeers().subscribe((beers) => {
      this.beers = beers;

    const uniqueBrewers = Array.from(new Set(this.beers.map(a => a.brewer)))
      .map(brewer => {
        return this.beers.find(a => a.brewer === brewer)
      }).map((beer) => beer.brewer
      )

      this.uniqueBrewers = uniqueBrewers
    });

  }

  selectBrewer(e) {
    let selectedBrewer = e.target.innerHTML
    let brewerBeers = this.beers.filter(beer => beer.brewer === selectedBrewer);

    // Sort beers alphabetically
    brewerBeers.sort((a, b) => a.name.localeCompare(b.name))

    // Show only 15 first beers
    this.slicedBeers = brewerBeers.slice(0, 15);

    this.brewerBeers = this.slicedBeers
  }

  // Get the clicked image url
  showImage(e) {
    console.log(e.target.currentSrc)
  }

}
