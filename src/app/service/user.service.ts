import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VariableGlobals } from "../common/variableGlobals";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUri : string ;

  constructor(private http: HttpClient, private variableglobas: VariableGlobals) {
      this.baseUri = variableglobas.baseUrl;
  }

  loginApi (user): Observable<any> {
      let url = `${this.baseUri}/login`;
      return this.http.post(url, user);
  }

  getProfileByToken(): Observable<any> {
      let url = `${this.baseUri}/checktoken`;
      return this.http.get(url);
  }
}
