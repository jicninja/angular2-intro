import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  constructor(private _http:Http) {

  }

  search( cityName: string ):Observable<any> {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=2f733ac74988538b834072348b43c61c&units=metric')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json())
      });
  }
}
