import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MyServiceService]
})
export class DashboardComponent implements OnInit {

  constructor(private _MyServiceService: MyServiceService) {

  }

  list: Array<string> = [];

  public runService () {
    let service$ = this._MyServiceService.addStuff();

    service$.subscribe((val) => {
      this.list.push('Observable ' + val.value);
      console.log('value--->', val);
    });

  }

  ngOnInit() {

  }

}
