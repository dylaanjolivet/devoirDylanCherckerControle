import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class ApiService {
private readonly apiUrl: string;
private endpointUrl:string ="https://entreprise.data.gouv.fr/api/sirene/v3";
constructor(private http: HttpClient) { 
}
 
public get<T>( route: string ) {
    const fullRoute = this.apiUrl + route;
    return this.http.get<T>(fullRoute);
  }

  public post<T>( route: string, body: any ) {
    const fullRoute = this.apiUrl + route;
    return this.http.post<T>(fullRoute, body);
  }

  public patch<T>( route: string, body: any ) {
    const fullRoute = this.apiUrl + route;
    return this.http.patch<T>(fullRoute, body);
  }

  public put<T>( route: string, body: any ) {
    const fullRoute = this.apiUrl + route;
    return this.http.put<T>(fullRoute, body);
  }

  public delete<T>( route: string ) {
    const fullRoute = this.apiUrl + route;
    return this.http.delete<T>(fullRoute);
  }

  public upload<T>( route: string, formData: FormData ) {
    const fullRoute = this.apiUrl + route;

    return this.http.post<T>(fullRoute, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}