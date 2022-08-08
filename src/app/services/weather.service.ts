import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(option: string): Observable<WeatherData> {
    const url = environment.weatherApiBaseUrl + option;
    return this.http.get<WeatherData>(url, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyValue)
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostValue
        ),
    });
  }
}
