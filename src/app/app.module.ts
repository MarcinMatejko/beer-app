import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BeerListComponent } from "./components/beer-list/beer-list.component";
import { BeersComponent } from "./components/beers/beers.component";
import { BeerService } from "./services/beer.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, BeerListComponent, BeersComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
