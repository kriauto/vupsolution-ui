import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { VariableGlobals } from "./variableGlobals";
import {User} from "./user";

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

  // Error handling
  /*errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }*/
}
