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
  selectedBrewer;


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



      // const selectedBrewer = this.beers.filter(beer => beer.brewer === this.selectBrewer);
    // console.log(selectedBrewer)
    });


  }

  selectBrewer(e) {
    console.log(e.target.innerHTML)
  }

}
