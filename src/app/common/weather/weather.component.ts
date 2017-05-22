import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})

export class WeatherComponent {

  weather = {
    loading: false,
    data: undefined,
    city: undefined
  };

  constructor(private _WeatherService: WeatherService) { }


  public getWeather(city:string) {

    this.weather.loading = true;
    this.weather.city = city;

    let weather$ = this._WeatherService;

    weather$.search(city).subscribe(
      //success
      (w) => {
        console.log('result --->', w);
        this.weather.data = w.main;
        this.weather.city = w.name;
      },
      //catch
      (err) => {
        //catch hereeee
      },
      //finally
      () => {
        this.weather.loading = false;
      }
    );
  }

  public resetWeather() {
    this.weather = {
      loading: false,
      data: undefined,
      city: undefined
    };
  }


  ngOnInit() {
    this.getWeather('Villa Allende');
  }

}
