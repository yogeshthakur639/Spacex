import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  getSpaceXProduct(
    limit?: any,
    launchSuccess?: any,
    landSuccess?: any,
    launchYear?: any
  ) {
    let params = new HttpParams();
    params = params.append('limit', limit);
    console.log('land', landSuccess);
    console.log('launch', launchSuccess);
    if (launchSuccess !== undefined && landSuccess !== undefined) {
      console.log('here');
      return;
    }
    if (launchSuccess !== undefined) {
      params = params.append('launch_success', launchSuccess);
    }
    // if (landSuccess !== undefined) {
    //   params = params.append('land_success', landSuccess);
    // }
    if (launchYear !== undefined) {
      params = params.append('launch_year', launchYear);
    }

    const institutionListApiUrl = `https://api.spaceXdata.com/v3/launches`;
    return this.http.get(institutionListApiUrl, { params }).pipe(
      map((res: Response) => res),
      map((body) => body),
      catchError((body) => of(body))
    );
  }
}
