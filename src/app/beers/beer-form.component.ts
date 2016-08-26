import { Component, Output, EventEmitter } from '@angular/core';

import { IBeer } from './beer';

@Component({
  moduleId: module.id,
  selector: 'beer-form',
  templateUrl: 'beer-form.component.html',
})
export class BeerFormComponent  {

  title: string = 'New Beer';

  @Output()
  beerAdded: EventEmitter<IBeer> = new EventEmitter<IBeer>();

  beer: IBeer = <IBeer>{
  };

  onSubmit() {
    this.beerAdded.emit(this.beer);
    this.beer = <IBeer>{
    };
  }
}
