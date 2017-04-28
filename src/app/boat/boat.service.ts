import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class BoatService{

  constructor(private http: Http){};

  storeBoat(boat) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://127.0.0.1:8000/api/boat-store',
      boat,
      {headers: headers})
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
  getBoats() {
    return this.http.get('http://127.0.0.1:8000/api/boat-list')
      .map(
        (response: Response) => {
          const data = response.json();
          console.log(data.boats.data);
          return data.boats.data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
  getBoat(boat) {
    return this.http.get('https://udemy-ng-http.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

}
