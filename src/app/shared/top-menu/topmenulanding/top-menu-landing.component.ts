import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-top-menu-landing',
  templateUrl: 'top-menu-landing.component.html',
  styleUrls: ['../top-menu.component.css'],
})

export class TopMenuLandingComponent implements OnInit {

  showLogin = true;

  constructor() {
  }

  ngOnInit() {

  }

  logInButton() {
    // this.authentication.login();
  }

  logout() {
    // this.authentication.logout();
  }
}
