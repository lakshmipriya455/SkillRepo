import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewConnection } from '../model/new-connection';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:6565/connections";

  }
  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }
  addConnection(connection: NewConnection): Observable<NewConnection> {
    return this.http.post(this.baseUrl, JSON.stringify(connection), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }
}
