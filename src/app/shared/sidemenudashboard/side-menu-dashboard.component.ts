import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {UserService} from "../../services/user.service";
import {UserInfo} from "../../domain/userInfo";

@Component({
  selector: 'app-side-menu-dashboard',
  templateUrl: 'side-menu-dashboard.component.html',
  styleUrls: ['./side-menu-dashboard.component.css']
})

export class SideMenuDashboardComponent implements OnInit {

  toggle: number[] = [];
  userInfo: UserInfo;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserInfo().subscribe(
      res => {
        this.userInfo = res;
        this.userService.userInfo = res;
        // console.log(this.userInfo);
      }, error => {
        console.log(error);
      }
    );
  }

  hasRole(role: string) {
    return this.userInfo.roles.indexOf(role) > -1;
  }

}
