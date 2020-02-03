import { Component, TemplateRef, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { UserService } from './user.service';
import { User } from './user';
import { VariableGlobals } from "./variableGlobals";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  islogged : boolean;
  failed   : boolean;
  success  : boolean;
  userForm : FormGroup;
  modalRef : BsModalRef;
  user     : User;
  error    : Error;

  constructor(private router: Router, public fb: FormBuilder,private modalService: BsModalService, private userApi: UserService, private variableglobas: VariableGlobals) {
    console.log(" app const -> ");
    this.mainForm();
    this.checktoken();
  }

  ngOnInit() {
    console.log(" ngOnInit -> ");
    this.user     = new User();
    this.error    = new Error();
    this.islogged = false ;
  }

  mainForm() {
    this.userForm = this.fb.group({
      login: [''],
      password: ['']
    })
  }

  login(){
    console.log(" login -> ");
    this.error    = new Error();
    console.log(" userForm -> "+this.userForm.get('login').value+this.userForm.get('password').value);
    this.userApi.loginApi(this.userForm.value)
      .subscribe(res => {
        this.user     = Object.assign(new User(),res);
        this.failed   = false;
        this.success  = true;
        localStorage.setItem('token',this.user.token);
        this.modalRef.hide();
        console.log(" islogged1  "+this.variableglobas.islogged);
        this.variableglobas.islogged = true;
        console.log(" islogged2  "+this.variableglobas.islogged);
        this.router.navigate(['/home']);
        console.log(" token  "+this.user.token);
      }, err => {
        this.error   = Object.assign(new Error(),err.error);
        this.failed  = true;
        this.success = false;
        console.log(" error "+this.error.message);
      });
  }

  checktoken(){
    console.log(" checktoken -> ");
    this.userApi.getProfileByToken()
        .subscribe(res => {
          this.variableglobas.islogged = true;
          this.user     = Object.assign(new User(),res);
          this.router.navigate(['/home']);
        }, err => {
          this.variableglobas.islogged = false;
          this.router.navigate(['']);
        });
  }

  logout(){
    this.variableglobas.islogged = false;
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  openModal(template: TemplateRef<any>) {
    this.userForm = this.fb.group({
      login: [''],
      password: ['']
    })
    this.failed   = true ;
    this.success  = true ;
    this.modalRef = this.modalService.show(template);
  }
}
