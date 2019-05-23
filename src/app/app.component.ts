import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./service/authentication.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'Accueil';
  private menu : Boolean;
  private connected : Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.connected = true;
    if(this.connected){
      this.menu = false;
      this.router.navigateByUrl('/welcome');
    }
  }

  public displayMenu(){
    this.menu = !this.menu;
  }
}
