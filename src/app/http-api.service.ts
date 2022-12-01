import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }
  post(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data);
  }
}
