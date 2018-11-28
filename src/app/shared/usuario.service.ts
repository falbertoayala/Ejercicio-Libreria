import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) {

    this.http = http;
   }

   getAutores(){
     return this.http.get("https://fakerestapi.azurewebsites.net/api/Authors")
   }
}
