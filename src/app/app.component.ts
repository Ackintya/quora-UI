import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public navBarStatus: boolean = false;
  constructor() { }

  ngOnInit() {
    this.getLoggedInStatus();
  }

  public getLoggedInStatus(): void {
    const access_token = window.sessionStorage.getItem('access_token');
    if(access_token !== null && access_token.length > 0) {
       this.navBarStatus = true;
    }
  }
}
