import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) { }
  getAllapi():Observable<any>
  {
     return this.httpClient.get<any>("http://localhost:8080/products");
  }
  
  saveCountry(country: any): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/products", country);
  }

  updateCountry(id: string, country: any): Observable<any> {
    return this.httpClient.put<any>("http://localhost:8080/products/" + id, country);
  }

  deleteCountry(id: string): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8080/products/" + id);
  }

}
