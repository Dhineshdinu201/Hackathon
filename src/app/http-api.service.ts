import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) { }
  get(url:string) {
    return this.http.get(url);
  }
  post(url: string, data: any) {
    return this.http.post(url,data);
  }
}
