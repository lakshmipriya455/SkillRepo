import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { ServicePackage } from '../model/service-package';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlansService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:6565/packages";
  }
  getAllPackages(): Observable<ServicePackage[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );

  }
  getSearchUrl(type: string, value: number): string {
    return this.baseUrl + "/" + type + "/" + value;
  }

  searchPackages(field: string, value: number): Observable<ServicePackage[]> {
    return this.http.get(this.getSearchUrl(field, value)).pipe(
      map(data => data.json())
    );
  }
}
