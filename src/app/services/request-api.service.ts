import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { API_URL } from 'src/environments/environments';
import { IRequest } from '../interface/IRequest';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {
  constructor(private httpClient: HttpClient) { }

  sendRequest(userResponse: any){
    return this.httpClient.post<IRequest>(`${API_URL}convemteam`, {userResponse: userResponse}).toPromise()
  }
}
