import { PipeTransform, Pipe } from '@angular/core';

import { IBeer } from './beer';

@Pipe({
  name: 'beerFilter'
})
export class BeerFilterPipe implements PipeTransform {

  transform(array: IBeer[], str: string) : IBeer[] {
    let filter: string = str ? str.toLowerCase() : null;

    if (filter) {
      return array.filter( (beer: IBeer) =>
        beer.name.toLowerCase().indexOf(filter) != -1)
    } else {
      return array;
    }
  }
}
