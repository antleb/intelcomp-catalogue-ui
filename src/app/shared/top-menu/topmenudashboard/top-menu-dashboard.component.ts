import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {UserInfo} from "../../../domain/userInfo";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-top-menu-dashboard',
  templateUrl: 'top-menu-dashboard.component.html',
  styleUrls: ['../top-menu.component.css']
})

export class TopMenuDashboardComponent implements OnInit {

  userInfo: UserInfo = null;

  constructor(private userService: UserService, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    this.userService.getUserInfo().subscribe(
      res => {
        this.userInfo = res;
        // console.log(this.userInfo);
      }, error => {
        console.log(error);
      }
    );

  }

  parseUsername() {
    let firstLetters = "";
    let matches = this.userInfo.fullname.match(/\b(\w)/g);
    if(matches)
      firstLetters += matches.join('');
    return firstLetters;
  }

  change() {
    const el: HTMLElement = document.getElementById('hamburger');
    if(el.classList.contains('change')) {
      el.classList.remove('change');
      const el1: HTMLElement = document.getElementById('sidebar_main_content');
      el1.classList.remove('sidebar_main_active');
    } else {
      el.classList.add('change');
      const el1: HTMLElement = document.getElementById('sidebar_main_content');
      el1.classList.add('sidebar_main_active');
    }
  }

  logout() {
    this.authenticationService.logout();
  }
}
