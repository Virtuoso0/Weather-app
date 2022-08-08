import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selected = 'seattle,wa';

  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.selected).subscribe((res) => {
      this.weatherData = res;
    });
  }

  changeCity(cityCode: any) {
    this.weatherService.getWeatherData(cityCode.value).subscribe((res) => {
      this.weatherData = res;
    });
  }
}
