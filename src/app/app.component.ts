import { Component, ElementRef } from '@angular/core';
import { IRequest } from './interface/IRequest';
import {RequestApiService} from './services/request-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  userResponse: string = ''
  
 public apiResponse: IRequest = {msg: "Sem Resposta"}

  constructor(private requestApiService: RequestApiService, private elementRef: ElementRef){}
  sendRequest(userResponse: any){
    this.requestApiService.sendRequest(userResponse)
        .then(response =>{
           this.apiResponse = response ?? this.apiResponse
           console.log(this.apiResponse)
        })
        .catch(err => {
          this.apiResponse = err.error ?? this.apiResponse
          console.log(this.apiResponse)
        })
  }

  onclick(){
    console.log(this.userResponse)
    this.sendRequest(this.userResponse)
    this.scroll('#response')
  }

  scroll(element: string){
    const elementResponse = this.elementRef.nativeElement.querySelector(element);
    elementResponse.scrollIntoView({ 
      behavior: 'smooth', block: 'start' 
    });
  }
}