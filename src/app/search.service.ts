import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  searchUniversities(country: string): Observable<any[]> {
     return this.httpClient.get(`http://universities.hipolabs.com/search?country=${country}`).pipe(
       map(res => res as any[])
     );
  }
}
