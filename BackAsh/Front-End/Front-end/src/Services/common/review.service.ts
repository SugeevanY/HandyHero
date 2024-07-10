import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewUrl =  "https://localhost:7279/api/Reviews1";

  constructor(private http: HttpClient) { }

  submitReview( ReviewerId: number, Email: string, ReviewText: string,TimeStamp: string): Observable<any> {
    const body = {  Email, ReviewerId,ReviewText ,TimeStamp};
    return this.http.post(`${this.reviewUrl}`, body);
  }


getAllReviews(): Observable<HttpResponse<any>> {
  return this.http.get<any[]>(`${this.reviewUrl}/all`, { observe: 'response' });
}



}

@Injectable({
  providedIn: 'root'
})
export class FieldWorkerService {

  
}
