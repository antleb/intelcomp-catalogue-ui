import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscriber, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {LandingPageService} from "../../../services/landing-page.service";
import {NavigationService} from "../../../../app/services/navigation.service";
import {UserService} from "../../../../app/services/user.service";
import {UserInfo} from "../../../../app/domain/userInfo";

@Component({
  selector: 'app-dataset',
  templateUrl: 'dataset-landing-page.component.html',
  providers: [LandingPageService]
})

export class LandingPageComponent implements OnInit, OnDestroy {
  subscriptions = [];
  dataset: Object = null;
  instances: Object[] = null;
  userInfo: UserInfo = null;

  constructor(protected route: ActivatedRoute,
              protected navigationService: NavigationService,
              protected landingPageService: LandingPageService,
              protected router: Router,
              protected userService: UserService) {}

  ngOnInit() {
    if (this.userService.userInfo !== null) {
      this.userInfo = this.userService.userInfo;
    } else {
      this.subscriptions.push(
        this.userService.getUserInfo().subscribe(
          res => {
            this.userInfo = res;
            this.userService.userInfo = res;
          },
          error => {
            console.log(error);
          }
        )
      );
    }


    this.subscriptions.push(
      this.route.params.subscribe(params => {
        this.subscriptions.push(
          this.landingPageService.getDataset(params['id']).subscribe(
            res => {
              this.dataset = res;
              // console.log(this.dataset);
              this.subscriptions.push(
                this.landingPageService.searchDatasetInstance('dataset_instance', this.dataset['name']).subscribe(
                  res => {
                    this.instances = res['results'];
                  }
                )
              );
            }
          )
        );
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription instanceof Subscriber) {
        subscription.unsubscribe();
      }
    });
  }
}
