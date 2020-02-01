import { Component, TemplateRef, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { UserService } from './user.service';
import { User } from './user';


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

  constructor(private router: Router, public fb: FormBuilder,private modalService: BsModalService, private userApi: UserService) {
    this.mainForm();
  }

  ngOnInit() {
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
    this.error    = new Error();
    console.log(" userForm -> "+this.userForm.get('login').value+this.userForm.get('password').value);
    this.userApi.loginApi(this.userForm.value)
      .subscribe(res => {
        this.user     = Object.assign(new User(),res);
        this.islogged = true;
        this.failed   = false;
        this.success  = true;
        localStorage.setItem('token',this.user.authToken);
        this.modalRef.hide();
        this.router.navigate(['']);
        console.log(" user  "+this.user.authToken);
      }, err => {
        this.error   = Object.assign(new Error(),err.error);
        this.failed  = true;
        this.success = false;
        console.log(" error "+this.error.message);
      });
  }

  logout(){
    this.islogged = false;
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
