import {Component} from "@angular/core";
import {LandingPageService} from "../../../../catalogue-ui/services/landing-page.service";
import {LandingPageComponent} from "../../../../catalogue-ui/pages/landingpages/dataset/landing-page.component";

@Component({
  selector: 'app-dataset',
  templateUrl: 'dataset-landing-page.component.html',
  providers: [LandingPageService]
})

export class DatasetLandingPageComponent extends LandingPageComponent {}
