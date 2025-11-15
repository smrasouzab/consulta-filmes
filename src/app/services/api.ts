import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://senai-streams.ddns.net';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getContents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contents`);
  }

  getContentById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/contents/${id}`);
  }

  getContentsByCategory(categoryId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/contents?categoryId=${categoryId}`);
  }

  getReviews(contentId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/reviews?contentId=${contentId}`);
  }

  addReview(review: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reviews`, review);
  }
}