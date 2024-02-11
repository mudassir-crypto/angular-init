import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  private getStandardOptions(): any{
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  constructor(private http: HttpClient) { }

  getWishes(){
    let options = this.getStandardOptions();
    return this.http.get('/assets/wishes.json', options);
  }
}
