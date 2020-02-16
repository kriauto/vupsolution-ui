import { Injectable } from '@angular/core';

@Injectable()
export class VariableGlobals {
    baseUrl: string = 'http://localhost:8088/api';
    islogged: boolean = false;
}