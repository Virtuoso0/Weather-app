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
  city?: string;

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.selected).subscribe((res) => {
      this.weatherData = res;
    });
  }

  changeCity(cityCode: any): void {
    this.weatherService.getWeatherData(cityCode.value).subscribe((res) => {
      this.weatherData = res;
      this.city = this.translateCityCode(cityCode.value);
    });
  }

  translateCityCode(cityCode: any): string {
    switch (cityCode) {
      case 'seattle,wa': {
        return 'Seattle';
        break;
      }
      case 'new+york,ny': {
        return 'New york';
        break;
      }
      case 'toronto,on': {
        return 'Toronto';
        break;
      }
      case 'guangzhou,gd': {
        return 'Guangzhou';
        break;
      }
      case 'paris,fr': {
        return 'Paris';
        break;
      }
    }
    return '';
  }
}
