import { Home } from './home';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiurl: string = 'http://localhost/apiinphp/api/conection.php';

  constructor(private httpClient: HttpClient) { }

  getAllapi(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost/apiinphp/api/conection.php');
  }

  updateapi(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>('http://localhost/apiinphp/api/conection.php?id=' + id, data);
  }

  deleteapi(id:number):Observable<any>
  {
     return this.httpClient.delete<any>(`${this.apiurl}`,{body:{id:id}});
  }

  saveapi(formData: FormData): Observable<any> {
    return this.httpClient.post<any>(`${this.apiurl}/save`, formData);
  }
  
}