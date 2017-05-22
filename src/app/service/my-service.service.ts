import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class MyServiceService {

  addStuff() {
    return Observable
      .interval(1500)
      .timeInterval()
      .take(3);
  }

}
