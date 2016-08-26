import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IBeer } from './beer';
import { BeerService } from './beer.service';
import { BeerFilterPipe } from './beer-filter.pipe';
import { StarComponent } from  '../star/star.component';
import { BeerFormComponent } from  './beer-form.component';

@Component({
  moduleId: module.id,
  selector: 'beer-list',
  templateUrl: 'beer-list.component.html',
  styleUrls: ['beer-list.component.css'],
  providers: [BeerService],
  pipes: [BeerFilterPipe],
  directives: [ROUTER_DIRECTIVES, StarComponent, BeerFormComponent]
})
export class BeerListComponent implements OnInit {

  imageWidth:number = 80;
  imageMargin:number = 2;

  filter: string;

  showImage: boolean = true;

  beers:IBeer[];

  private errorMessage: string;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.beerService.getBeers()
    .subscribe(
      beers => this.beers = beers,
      error => alert(error)
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  deleteBeer(id) {
    this.beerService.deleteBeer(id)
    .subscribe(
      res => this.getBeers(),
      error => alert(error)
    );
  }

  addNewBeer(beer) {
    this.beerService.createBeer(beer)
    .subscribe(
      beer => {
        console.log(beer)
        this.beers.push(beer)
      },
      error => alert(error)
    );
  }

}
