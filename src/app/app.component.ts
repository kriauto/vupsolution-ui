import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'Accueil';
  private menu : Boolean;
  private toggle : Boolean;

  ngOnInit() {
    this.menu = true;
    this.toggle = false;
  }

  public hideMenu(){
    this.menu = true;
    this.toggle = false;
  }

  public displayMenu(){
    this.menu = false;
    this.toggle = true;
  }
}
