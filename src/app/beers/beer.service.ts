import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BeerService {

  private beersUrl = 'http://localhost:3000/beers';

  constructor(private http: Http) { }

  getBeers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(this.beersUrl, { headers })
      .map(res => res.json());
  }

  createBeer(beer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.beersUrl,
        beer,
        { headers: headers }
      )
      .map(res => {
        return res.json()
      })
  }

  deleteBeer(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .delete(`${this.beersUrl}/${id}`,
        { headers: headers }
      )
      .map(res => {
        return res.json()
      })
  }

}
