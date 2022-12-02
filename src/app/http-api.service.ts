import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 6gheSnu+JA/RtscpDmyL9XN56mEA2F5i94/STeolERZ+6/PBwqMlaFusBSvsxG6z1z2uW2oJ2uJt+AMCuqi90w=='
  });
  options = { headers: this.headers };
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }
  post(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data, this.options);
  }
}
