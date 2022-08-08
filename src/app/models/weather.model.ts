export interface WeatherData {
  success: boolean;
  error: any;
  response: Response;
}

export interface Response {
  id: string;
  dataSource: string;
  loc: Loc;
  place: Place;
  profile: Profile;
  obTimestamp: number;
  obDateTime: string;
  ob: Ob;
  raw: string;
  relativeTo: RelativeTo;
}

export interface Loc {
  long: number;
  lat: number;
}

export interface Place {
  name: string;
  city: string;
  state: string;
  country: string;
}

export interface Profile {
  tz: string;
  tzname: string;
  tzoffset: number;
  isDST: boolean;
  elevM: number;
  elevFT: number;
}

export interface Ob {
  type: string;
  timestamp: number;
  dateTimeISO: string;
  recTimestamp: number;
  recDateTimeISO: string;
  tempC: number;
  tempF: number;
  dewpointC: number;
  dewpointF: number;
  humidity: number;
  pressureMB: number;
  pressureIN: number;
  spressureMB: number;
  spressureIN: number;
  altimeterMB: number;
  altimeterIN: number;
  windKTS: number;
  windKPH: number;
  windMPH: number;
  windSpeedKTS: number;
  windSpeedKPH: number;
  windSpeedMPH: number;
  windDirDEG: number;
  windDir: string;
  windGustKTS: any;
  windGustKPH: any;
  windGustMPH: any;
  flightRule: string;
  visibilityKM: number;
  visibilityMI: number;
  weather: string;
  weatherShort: string;
  weatherCoded: string;
  weatherPrimary: string;
  weatherPrimaryCoded: string;
  cloudsCoded: string;
  icon: string;
  heatindexC: number;
  heatindexF: number;
  windchillC: number;
  windchillF: number;
  feelslikeC: number;
  feelslikeF: number;
  isDay: boolean;
  sunrise: number;
  sunriseISO: string;
  sunset: number;
  sunsetISO: string;
  snowDepthCM: any;
  snowDepthIN: any;
  precipMM: any;
  precipIN: any;
  solradWM2: number;
  solradMethod: string;
  ceilingFT: any;
  ceilingM: any;
  light: number;
  uvi: any;
  QC: string;
  QCcode: number;
  trustFactor: number;
  sky: number;
}

export interface RelativeTo {
  lat: number;
  long: number;
  bearing: number;
  bearingENG: string;
  distanceKM: number;
  distanceMI: number;
}
