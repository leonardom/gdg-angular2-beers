import { Component, OnChanges, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'beer-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;

  width: number;

  ngOnChanges() {
    this.width = this.rating * 86 / 5;
  }
}
