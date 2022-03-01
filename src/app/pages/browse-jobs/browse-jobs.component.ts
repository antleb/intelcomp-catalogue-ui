import {Component, OnInit} from "@angular/core";
import {CatalogueService} from "../../services/catalogue.service";


@Component({
  selector: 'app-browse-jobs',
  templateUrl: 'browse-jobs.component.html'
})

export class BrowseJobsComponent implements OnInit{

  jobs: any = null;

  constructor(private catalogueService: CatalogueService) {
  }

  ngOnInit() {
    this.catalogueService.getJobs().subscribe(
      res => {this.jobs = res},
      error => {console.log(error)},
    )
  }

}
