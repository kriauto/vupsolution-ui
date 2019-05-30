import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService}  from "./service/authentication.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Authentication } from "./model/authentication";
import { Currentuser } from "./model/currentuser";
import { Message }  from "./model/message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private connected : Boolean;
  private menu : Boolean;
  private authentication : Authentication = new Authentication();
  private currentuser : Currentuser;
  private message: Message;
  private modalReference;

  constructor(private authenticationservice : AuthenticationService
              ,private config: NgbModalConfig
              ,private modalService: NgbModal
              ,private router: Router) {
      // customize default values of modals used by this component tree
      config.backdrop = 'static';
      config.keyboard = false;
  }

  ngOnInit() {
    this.connected = false;
    this.menu = false;
    this.message = null;
  }

  login() {
    this.authenticationservice.login(this.authentication)
        .subscribe(
            data =>
            {
              this.currentuser = data;
              this.authenticationservice.addToken(this.currentuser.authToken.toString());
              const text = 'success';
              this.message = new Message(text,'success','A2');
              //console.log(data);
              this.connected = true;
              this.menu = true;
              this.modalReference.close();
              this.router.navigateByUrl('/enterprise');
            },
            error =>
            {
              const text = error['error']['message'];
              //console.log(error);
              this.message = new Message(text,'error','A2');
            }
        )};

  logout() {
              this.authenticationservice.deleteToken();
              this.connected = false;
              this.menu = false;
              this.router.navigateByUrl('/');
        };

  open(content) {
    this.modalReference = null;
    this.authentication = new Authentication();
    this.message = null;
    this.modalReference = this.modalService.open(content);
  }

  displayMenu(){
    this.menu = !this.menu;
  }
}
